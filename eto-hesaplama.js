function hesaplaETo() {
    // Girdi değerlerini al
    const Tmax = parseFloat(document.getElementById('Tmax').value);
    const Tmin = parseFloat(document.getElementById('Tmin').value);
    const ea = parseFloat(document.getElementById('ea').value);
    const u2 = parseFloat(document.getElementById('u2').value);
    const n = parseFloat(document.getElementById('n').value);
    const latitude = parseFloat(document.getElementById('latitude').value);
    const altitude = parseFloat(document.getElementById('altitude').value);
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);

    // Ortalama sıcaklık
    const Tmean = (Tmax + Tmin) / 2;

    // Atmosferik basınç
    const P = 101.3 * Math.pow((293 - 0.0065 * altitude) / 293, 5.26);

    // Psikrometrik sabiti
    const gamma = 0.000665 * P;

    // Buhar basıncı eğrisi eğimi
    const delta = 4098 * (0.6108 * Math.exp(17.27 * Tmean / (Tmean + 237.3))) / Math.pow((Tmean + 237.3), 2);

    // Doygun buhar basıncı
    const es_Tmax = 0.6108 * Math.exp(17.27 * Tmax / (Tmax + 237.3));
    const es_Tmin = 0.6108 * Math.exp(17.27 * Tmin / (Tmin + 237.3));
    const es = (es_Tmax + es_Tmin) / 2;

    // Buhar basıncı açığı
    const vpd = es - ea;

    // Radyasyon hesaplamaları
    const J = Math.floor((275 * month / 9) - 30 + day);
    const dr = 1 + 0.033 * Math.cos(2 * Math.PI * J / 365);
    const delta_rad = 0.409 * Math.sin(2 * Math.PI * J / 365 - 1.39);
    const phi = latitude * Math.PI / 180;
    const ws = Math.acos(-Math.tan(phi) * Math.tan(delta_rad));
    
    // Atmosfer dışı radyasyon
    const Ra = 24 * 60 / Math.PI * 0.082 * dr * (
        ws * Math.sin(phi) * Math.sin(delta_rad) +
        Math.cos(phi) * Math.cos(delta_rad) * Math.sin(ws)
    );

    // Gün uzunluğu
    const N = 24 * ws / Math.PI;

    // Solar radyasyon
    const Rs = (0.25 + 0.5 * n/N) * Ra;

    // Net kısa dalga radyasyonu
    const Rns = 0.77 * Rs;

    // Net uzun dalga radyasyonu
    const sigma = 4.903e-9; // Stefan-Boltzmann sabiti
    const Rnl = sigma * ((Math.pow(Tmax + 273.16, 4) + Math.pow(Tmin + 273.16, 4)) / 2) * 
                (0.34 - 0.14 * Math.sqrt(ea)) * (1.35 * Rs/(0.75 * Ra) - 0.35);

    // Net radyasyon
    const Rn = Rns - Rnl;

    // Toprak ısı akısı (aylık için)
    const G = 0;

    // FAO Penman-Monteith denklemi
    const ET0 = (0.408 * delta * (Rn - G) + gamma * (900 / (Tmean + 273)) * u2 * vpd) / 
                (delta + gamma * (1 + 0.34 * u2));

    // Sonuçları göster
    const sonucHTML = `
        <table class="table table-sm">
            <tr><td>Ortalama Sıcaklık:</td><td>${Tmean.toFixed(1)} °C</td></tr>
            <tr><td>Buhar Basıncı Eğrisi Eğimi (Δ):</td><td>${delta.toFixed(3)} kPa/°C</td></tr>
            <tr><td>Psikrometrik Sabit (γ):</td><td>${gamma.toFixed(3)} kPa/°C</td></tr>
            <tr><td>Doygun Buhar Basıncı (es):</td><td>${es.toFixed(3)} kPa</td></tr>
            <tr><td>Buhar Basıncı Açığı:</td><td>${vpd.toFixed(3)} kPa</td></tr>
            <tr><td>Net Radyasyon (Rn):</td><td>${Rn.toFixed(2)} MJ/m²/gün</td></tr>
            <tr><td>Referans Evapotranspirasyon (ETo):</td><td>${ET0.toFixed(2)} mm/gün</td></tr>
        </table>
    `;

    document.getElementById('sonuclar').innerHTML = sonucHTML;
} 