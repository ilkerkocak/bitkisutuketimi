// Bitki verileri
const bitkiVerileri = {
    // Tahıllar
    bugday: {
        ad: "Buğday",
        maliyet: 2500,    // TL/dekar
        fiyat: 8.5,       // TL/kg
        verim: 450,       // kg/dekar
        sulamaSuresi: "10/15-6/15", // 15 Ekim - 15 Haziran
        sulamaRandimani: 0.65,  // Yağmurlama
        minAlan: 0,       // Minimum ekim alanı (dekar)
        maxAlan: Infinity, // Maksimum ekim alanı (dekar)
        rotasyon: ["arpa", "yulaf"], // Münavebe yapılabilecek bitkiler
        toprakTipi: ["hafif", "orta", "agir"], // Uygun toprak tipleri
        destekPrim: 0.55, // TL/kg devlet desteği
        iscilikMaliyeti: 500, // TL/dekar
        sulamaMaliyeti: 100,  // TL/dekar
        gubreMaliyeti: 800,   // TL/dekar
        tohumMaliyeti: 400,   // TL/dekar
        ilaçlamaMaliyeti: 300, // TL/dekar
        Kc: {
            baslangic: 0.3,
            orta: 1.15,
            son: 0.4
        },
        donemler: {
            baslangic: 30,
            gelisme: 140,
            orta: 40,
            son: 30,
            toplam: 240
        }
    },
    arpa: {
        ad: "Arpa",
        maliyet: 2300,
        fiyat: 7.5,
        verim: 400,
        sulamaSuresi: "10/15-5/15", // 15 Ekim - 15 Mayıs
        sulamaRandimani: 0.65,
        rotasyon: ["bugday", "yulaf"],
        toprakTipi: ["hafif", "orta", "agir"],
        destekPrim: 0.50,
        iscilikMaliyeti: 450,
        sulamaMaliyeti: 100,
        gubreMaliyeti: 750,
        tohumMaliyeti: 350,
        ilaçlamaMaliyeti: 250,
        Kc: {
            baslangic: 0.3,
            orta: 1.15,
            son: 0.25
        },
        donemler: {
            baslangic: 30,
            gelisme: 130,
            orta: 40,
            son: 30,
            toplam: 230
        }
    },
    yulaf: {
        ad: "Yulaf",
        maliyet: 2200,
        fiyat: 7.0,
        verim: 350,
        sulamaSuresi: "10/15-6/15",
        sulamaRandimani: 0.65,
        rotasyon: ["bugday", "arpa"],
        toprakTipi: ["hafif", "orta"],
        destekPrim: 0.45,
        iscilikMaliyeti: 400,
        sulamaMaliyeti: 100,
        gubreMaliyeti: 700,
        tohumMaliyeti: 300,
        ilaçlamaMaliyeti: 250,
        Kc: {
            baslangic: 0.3,
            orta: 1.15,
            son: 0.25
        },
        donemler: {
            baslangic: 30,
            gelisme: 140,
            orta: 40,
            son: 30,
            toplam: 240
        }
    },
    // Endüstri Bitkileri
    sekerpancari: {
        ad: "Şeker Pancarı",
        maliyet: 8000,
        fiyat: 1.5,
        verim: 7000,
        sulamaSuresi: "3/15-9/15",
        sulamaRandimani: 0.65,
        rotasyon: ["bugday", "arpa", "misir"],
        toprakTipi: ["orta", "agir"],
        destekPrim: 0.05,
        iscilikMaliyeti: 2500,
        sulamaMaliyeti: 1500,
        gubreMaliyeti: 2000,
        tohumMaliyeti: 1000,
        ilaçlamaMaliyeti: 1000,
        Kc: {
            baslangic: 0.35,
            orta: 1.2,
            son: 0.7
        },
        donemler: {
            baslangic: 35,
            gelisme: 60,
            orta: 70,
            son: 40,
            toplam: 205
        }
    },
    // Mısır Çeşitleri
    silajlikmisir: {
        ad: "Silajlık Mısır",
        maliyet: 6000,
        fiyat: 1.2,
        verim: 6000,
        sulamaSuresi: "4/15-8/15",
        sulamaRandimani: 0.90,
        rotasyon: ["bugday", "arpa"],
        toprakTipi: ["orta", "agir"],
        destekPrim: 0.1,
        iscilikMaliyeti: 1500,
        sulamaMaliyeti: 1200,
        gubreMaliyeti: 1800,
        tohumMaliyeti: 800,
        ilaçlamaMaliyeti: 700,
        Kc: {
            baslangic: 0.3,
            orta: 1.2,
            son: 0.35
        },
        donemler: {
            baslangic: 30,
            gelisme: 40,
            orta: 50,
            son: 30,
            toplam: 150
        }
    },
    danemisir: {
        ad: "Dane Mısır",
        maliyet: 7000,
        fiyat: 7.0,
        verim: 1200,
        sulamaSuresi: "4/15-9/15",
        sulamaRandimani: 0.90,
        rotasyon: ["bugday", "arpa"],
        toprakTipi: ["orta", "agir"],
        destekPrim: 0.15,
        iscilikMaliyeti: 1800,
        sulamaMaliyeti: 1500,
        gubreMaliyeti: 2000,
        tohumMaliyeti: 1000,
        ilaçlamaMaliyeti: 700,
        Kc: {
            baslangic: 0.3,
            orta: 1.2,
            son: 0.35
        },
        donemler: {
            baslangic: 30,
            gelisme: 40,
            orta: 50,
            son: 55,
            toplam: 175
        }
    },
    // Sebzeler
    domates: {
        ad: "Domates",
        maliyet: 15000,
        fiyat: 12,
        verim: 8000,
        sulamaSuresi: "4/15-9/6", // 15 Nisan - 6 Eylül
        sulamaRandimani: 0.90,
        rotasyon: ["biber", "salatalik"],
        toprakTipi: ["orta", "agir"],
        destekPrim: 0,
        iscilikMaliyeti: 5000,
        sulamaMaliyeti: 2000,
        gubreMaliyeti: 3000,
        tohumMaliyeti: 2500,
        ilaçlamaMaliyeti: 2500,
        Kc: {
            baslangic: 0.6,
            orta: 1.15,
            son: 0.8
        },
        donemler: {
            baslangic: 30,
            gelisme: 40,
            orta: 45,
            son: 30,
            toplam: 145
        }
    },
    salatalik: {
        ad: "Salatalık",
        maliyet: 12000,
        fiyat: 8,
        verim: 6000,
        sulamaSuresi: "4/15-8/15",
        sulamaRandimani: 0.90,
        rotasyon: ["domates", "biber"],
        toprakTipi: ["orta", "agir"],
        destekPrim: 0,
        iscilikMaliyeti: 4000,
        sulamaMaliyeti: 1800,
        gubreMaliyeti: 2500,
        tohumMaliyeti: 2000,
        ilaçlamaMaliyeti: 1700,
        Kc: {
            baslangic: 0.6,
            orta: 1.0,
            son: 0.75
        },
        donemler: {
            baslangic: 25,
            gelisme: 35,
            orta: 50,
            son: 20,
            toplam: 130
        }
    },
    biber: {
        ad: "Biber",
        maliyet: 13000,
        fiyat: 10,
        verim: 5000,
        sulamaSuresi: "3/15-8/15",
        sulamaRandimani: 0.90,
        rotasyon: ["domates", "salatalik"],
        toprakTipi: ["orta", "agir"],
        destekPrim: 0,
        iscilikMaliyeti: 4500,
        sulamaMaliyeti: 1900,
        gubreMaliyeti: 2700,
        tohumMaliyeti: 2200,
        ilaçlamaMaliyeti: 1700,
        Kc: {
            baslangic: 0.6,
            orta: 1.05,
            son: 0.9
        },
        donemler: {
            baslangic: 30,
            gelisme: 35,
            orta: 40,
            son: 20,
            toplam: 125
        }
    },
    // Diğer bitkiler...
};

// İklim verilerini ekleyelim
const iklimVerileri = {
    maxSicaklik: [4.1, 6.4, 11.9, 17.2, 21.0, 26.2, 29.8, 29.8, 25.8, 19.6, 12.9, 6.4],
    minSicaklik: [-3.3, -2.3, 0.8, 5.4, 8.9, 12.5, 15.3, 15.1, 10.9, 6.8, 2.5, -0.7],
    nem: [77.1, 75.9, 66.4, 59.6, 59.4, 52.9, 44.1, 42.4, 47.6, 58.3, 69.3, 78.0],
    ruzgarHizi: [181.4, 207.4, 216.0, 207.4, 172.8, 190.1, 216.0, 207.4, 181.4, 181.4, 172.8, 181.4],
    guneslenme: [2.36, 2.83, 4.30, 5.84, 7.88, 10.02, 11.65, 11.25, 9.00, 6.66, 4.46, 2.09],
    yagis: [47.0, 36.3, 36.3, 48.3, 54.6, 37.4, 13.8, 12.4, 19.3, 26.8, 33.4, 49.0]
};

function yeniBeyanEkle() {
    const beyanlarDiv = document.getElementById('beyanlar');
    const beyanId = beyanlarDiv.children.length + 1;
    
    const beyanHTML = `
        <div class="beyan-grup mb-3 p-3 border rounded">
            <h6>Beyan #${beyanId}</h6>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group mb-2">
                        <label>Bitki</label>
                        <select class="form-control bitki-secim">
                            ${Object.entries(bitkiVerileri).map(([key, bitki]) => 
                                `<option value="${key}">${bitki.ad}</option>`
                            ).join('')}
                        </select>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group mb-2">
                        <label>Alan (dekar)</label>
                        <input type="number" class="form-control alan-input">
                    </div>
                </div>
            </div>
        </div>
    `;
    
    beyanlarDiv.insertAdjacentHTML('beforeend', beyanHTML);
}

function hesaplaOptimizasyon() {
    const suKapasitesi = parseFloat(document.getElementById('suKapasitesi').value);
    const toplamAlan = parseFloat(document.getElementById('toplamAlan').value);
    
    const beyanlar = [];
    document.querySelectorAll('.beyan-grup').forEach(beyan => {
        const bitki = beyan.querySelector('.bitki-secim').value;
        const alan = parseFloat(beyan.querySelector('.alan-input').value);
        
        // Net sulama suyu ihtiyacı (mm)
        const sulamaProgrami = hesaplaSulamaProgrami(bitki);
        const netSuIhtiyaci = sulamaProgrami.yillikToplam;
        
        // Brüt sulama suyu ihtiyacı (m³)
        // 1 mm = 1 m³/da olduğundan, doğrudan çarpıyoruz
        const brutSuIhtiyaci = (netSuIhtiyaci * alan) / bitkiVerileri[bitki].sulamaRandimani;
        
        beyanlar.push({
            bitki,
            alan,
            suIhtiyaci: brutSuIhtiyaci
        });
    });
    
    // Toplam su ihtiyacını kontrol et
    const toplamSuIhtiyaci = beyanlar.reduce((sum, item) => sum + item.suIhtiyaci, 0);
    const toplamKar = beyanlar.reduce((sum, item) => {
        const bitki = bitkiVerileri[item.bitki];
        return sum + (bitki.fiyat * bitki.verim - bitki.maliyet) * item.alan;
    }, 0);
    
    // Sonuçları göster
    gosterSonuclar(beyanlar, toplamSuIhtiyaci, suKapasitesi, toplamKar);
    
    // Su yetersizse optimizasyon önerileri
    if (toplamSuIhtiyaci > suKapasitesi) {
        const kisitlamalar = {
            minToplamAlan: toplamAlan * 0.7,
            maxBitkiCesidi: 5,
            minRotasyon: true,
            toprakTipiUygunluk: true
        };

        optimizasyonOnerileri(beyanlar, suKapasitesi, kisitlamalar);
    }
}

function gosterSonuclar(beyanlar, toplamSuIhtiyaci, suKapasitesi, toplamKar) {
    const sonucHTML = `
        <table class="table table-sm">
            <thead>
                <tr>
                    <th>Bitki</th>
                    <th>Alan (da)</th>
                    <th>Su İhtiyacı (m³)</th>
                    <th>Kar (TL)</th>
                </tr>
            </thead>
            <tbody>
                ${beyanlar.map(item => `
                    <tr>
                        <td>${bitkiVerileri[item.bitki].ad}</td>
                        <td>${item.alan}</td>
                        <td>${Math.round(item.suIhtiyaci).toLocaleString()}</td>
                        <td>${Math.round((bitkiVerileri[item.bitki].fiyat * bitkiVerileri[item.bitki].verim - bitkiVerileri[item.bitki].maliyet) * item.alan).toLocaleString()}</td>
                    </tr>
                `).join('')}
                <tr class="table-primary">
                    <td colspan="2"><strong>Toplam</strong></td>
                    <td><strong>${Math.round(toplamSuIhtiyaci).toLocaleString()} m³</strong></td>
                    <td><strong>${Math.round(toplamKar).toLocaleString()} TL</strong></td>
                </tr>
            </tbody>
        </table>
        <div class="alert ${toplamSuIhtiyaci > suKapasitesi ? 'alert-danger' : 'alert-success'}">
            Su Kapasitesi: ${suKapasitesi.toLocaleString()} m³
            ${toplamSuIhtiyaci > suKapasitesi ? 
                `<br>Eksik Su: ${Math.round(toplamSuIhtiyaci - suKapasitesi).toLocaleString()} m³` : 
                '<br>Su yeterli'}
        </div>
    `;
    
    document.getElementById('sonuclar').innerHTML = sonucHTML;
}

function optimizasyonOnerileri(beyanlar, suKapasitesi, kisitlamalar) {
    // 1. Karlılık Analizi
    const karlilikAnalizleri = beyanlar.map(item => {
        const bitki = bitkiVerileri[item.bitki];
        const brutKar = (bitki.fiyat * bitki.verim - bitki.maliyet) * item.alan;
        const destekGeliri = bitki.destekPrim * bitki.verim * item.alan;
        const toplamGelir = brutKar + destekGeliri;
        const birimSuKarliligi = toplamGelir / item.suIhtiyaci;
        const iscilikOrani = bitki.iscilikMaliyeti / bitki.maliyet;
        
        return {
            bitki: item.bitki,
            alan: item.alan,
            suIhtiyaci: item.suIhtiyaci,
            brutKar: brutKar,
            destekGeliri: destekGeliri,
            toplamGelir: toplamGelir,
            birimSuKarliligi: birimSuKarliligi,
            iscilikOrani: iscilikOrani
        };
    });

    // 2. Rotasyon Kontrolü
    const rotasyonUygunluk = karlilikAnalizleri.every(item => {
        const bitki = bitkiVerileri[item.bitki];
        const rotasyonBitkileri = karlilikAnalizleri
            .filter(a => bitki.rotasyon.includes(a.bitki));
        return rotasyonBitkileri.length > 0;
    });

    // 3. Su Optimizasyonu
    let kalanSu = suKapasitesi;
    const optimumDesen = karlilikAnalizleri
        .sort((a, b) => b.birimSuKarliligi - a.birimSuKarliligi)
        .map(item => {
            const bitki = bitkiVerileri[item.bitki];
            const maxAlan = Math.min(
                item.alan,
                bitki.maxAlan,
                (kalanSu / item.suIhtiyaci) * item.alan
            );
            kalanSu -= (maxAlan / item.alan) * item.suIhtiyaci;
            
            return {
                bitki: item.bitki,
                onerilenAlan: Math.max(bitki.minAlan, maxAlan),
                azaltma: item.alan - maxAlan,
                karKaybi: (item.alan - maxAlan) * (item.toplamGelir / item.alan)
            };
        });

    // Sonuçları göster
    const oneriHTML = `
        <div class="alert alert-info">
            <h6>Optimizasyon Önerileri:</h6>
            <div class="table-responsive">
                <table class="table table-sm">
                    <thead>
                        <tr>
                            <th>Bitki</th>
                            <th>Mevcut Alan</th>
                            <th>Önerilen Alan</th>
                            <th>Azaltma</th>
                            <th>Kar Kaybı</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${optimumDesen.map(item => `
                            <tr>
                                <td>${bitkiVerileri[item.bitki].ad}</td>
                                <td>${item.alan.toFixed(1)} da</td>
                                <td>${item.onerilenAlan.toFixed(1)} da</td>
                                <td>${item.azaltma > 0 ? 
                                    `${item.azaltma.toFixed(1)} da` : 
                                    '-'}</td>
                                <td>${item.karKaybi > 0 ? 
                                    `${item.karKaybi.toLocaleString()} TL` : 
                                    '-'}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
            
            <div class="mt-3">
                <h6>Ek Öneriler:</h6>
                <ul>
                    ${!rotasyonUygunluk ? 
                        '<li class="text-warning">Münavebe planlaması gerekiyor!</li>' : ''}
                    ${kalanSu > suKapasitesi * 0.1 ? 
                        `<li class="text-info">Kullanılabilir ${Math.round(kalanSu).toLocaleString()} m³ su mevcut</li>` : ''}
                    <li>Birim su başına en karlı bitkiler: ${karlilikAnalizleri
                        .sort((a, b) => b.birimSuKarliligi - a.birimSuKarliligi)
                        .slice(0, 3)
                        .map(k => bitkiVerileri[k.bitki].ad)
                        .join(', ')}</li>
                </ul>
            </div>
        </div>
    `;
    
    document.getElementById('oneriler').innerHTML = oneriHTML;
}

// ETo hesaplama fonksiyonlarını ekleyelim
function hesaplaBuharBasinci(sicaklik, bagilNem) {
    const es = 0.6108 * Math.exp((17.27 * sicaklik) / (sicaklik + 237.3));
    return es * (bagilNem / 100);
}

function hesaplaETo(ay) {
    const Tmax = iklimVerileri.maxSicaklik[ay];
    const Tmin = iklimVerileri.minSicaklik[ay];
    const Tmean = (Tmax + Tmin) / 2;
    const RH = iklimVerileri.nem[ay];
    const u2 = iklimVerileri.ruzgarHizi[ay] * (1000 / 86400);
    const n = iklimVerileri.guneslenme[ay];
    const altitude = 891;
    const latitude = 39.57;
    const day = 15;

    // ... (ETo hesaplama kodları - script.js'den alınacak)
    const P = 101.3 * Math.pow((293 - 0.0065 * altitude) / 293, 5.26);
    const gamma = 0.000665 * P;
    const delta = 4098 * (0.6108 * Math.exp(17.27 * Tmean / (Tmean + 237.3))) / Math.pow((Tmean + 237.3), 2);
    const ea = hesaplaBuharBasinci(Tmean, RH);
    const es_Tmax = 0.6108 * Math.exp(17.27 * Tmax / (Tmax + 237.3));
    const es_Tmin = 0.6108 * Math.exp(17.27 * Tmin / (Tmin + 237.3));
    const es = (es_Tmax + es_Tmin) / 2;
    const vpd = es - ea;

    const J = Math.floor((275 * (ay + 1) / 9) - 30 + day);
    const dr = 1 + 0.033 * Math.cos(2 * Math.PI * J / 365);
    const delta_rad = 0.409 * Math.sin(2 * Math.PI * J / 365 - 1.39);
    const phi = latitude * Math.PI / 180;
    const ws = Math.acos(-Math.tan(phi) * Math.tan(delta_rad));
    const Ra = 24 * 60 / Math.PI * 0.082 * dr * (
        ws * Math.sin(phi) * Math.sin(delta_rad) +
        Math.cos(phi) * Math.cos(delta_rad) * Math.sin(ws)
    );

    const N = 24 * ws / Math.PI;
    const Rs = (0.25 + 0.5 * n/N) * Ra;
    const Rns = 0.77 * Rs;
    const sigma = 4.903e-9;
    const Rnl = sigma * ((Math.pow(Tmax + 273.16, 4) + Math.pow(Tmin + 273.16, 4)) / 2) * 
                (0.34 - 0.14 * Math.sqrt(ea)) * (1.35 * Rs/(0.75 * Ra) - 0.35);
    const Rn = Rns - Rnl;
    const G = 0;

    const ET0 = (0.408 * delta * (Rn - G) + gamma * (900 / (Tmean + 273)) * u2 * vpd) / 
                (delta + gamma * (1 + 0.34 * u2));

    return Math.max(0, ET0);
}

// Sulama programı hesaplama fonksiyonu
function hesaplaSulamaProgrami(bitkiSecimi) {
    const aylar = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 
                   'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
    
    const aylikVeriler = aylar.map((_, index) => {
        const ayNo = index + 1;
        const ETo = hesaplaETo(index);
        const bitki = bitkiVerileri[bitkiSecimi];
        
        // Yetiştirme dönemini kontrol et
        const [ekimAy, ekimGun] = bitki.sulamaSuresi.split('-')[0].split('/').map(Number);
        const [hasatAy, hasatGun] = bitki.sulamaSuresi.split('-')[1].split('/').map(Number);
        
        let Kc = 0;
        
        // Yetiştirme döneminde mi kontrol et
        let isYetistirmeDonemi = false;
        if (ekimAy > hasatAy) {
            // Ekim-Haziran gibi yıl dönümü olan bitkiler
            isYetistirmeDonemi = (ayNo >= ekimAy || ayNo <= hasatAy);
        } else {
            // Normal dönem bitkileri
            isYetistirmeDonemi = (ayNo >= ekimAy && ayNo <= hasatAy);
        }
        
        if (isYetistirmeDonemi) {
            // Gelişim dönemini hesapla
            let gunSayisi;
            if (ayNo >= ekimAy) {
                gunSayisi = (ayNo - ekimAy) * 30 + 15;
            } else {
                gunSayisi = ((12 - ekimAy) + ayNo) * 30 + 15;
            }
            
            const donemler = bitki.donemler;
            
            if (gunSayisi <= donemler.baslangic) {
                Kc = bitki.Kc.baslangic;
            } else if (gunSayisi <= donemler.baslangic + donemler.gelisme) {
                const gelismeSureci = (gunSayisi - donemler.baslangic) / donemler.gelisme;
                Kc = bitki.Kc.baslangic + (bitki.Kc.orta - bitki.Kc.baslangic) * gelismeSureci;
            } else if (gunSayisi <= donemler.baslangic + donemler.gelisme + donemler.orta) {
                Kc = bitki.Kc.orta;
            } else {
                Kc = bitki.Kc.son;
            }
        }
        
        const ETc = ETo * Kc;
        const gunSayisi = new Date(2024, index + 1, 0).getDate();
        const aylikETc = ETc * gunSayisi;
        
        // Efektif yağış hesabı
        const yagis = iklimVerileri.yagis[index];
        const efektifYagis = yagis * 0.7; // Basitleştirilmiş hesaplama
        
        const sulamaIhtiyaci = Math.max(0, aylikETc - efektifYagis);
        
        return {
            ay: aylar[index],
            ETo: ETo,
            ETc: ETc,
            Kc: Kc,
            yagis: yagis,
            efektifYagis: efektifYagis,
            sulamaIhtiyaci: sulamaIhtiyaci
        };
    });

    const yillikToplam = aylikVeriler.reduce((sum, ay) => sum + ay.sulamaIhtiyaci, 0);
    
    return {
        aylikVeriler: aylikVeriler,
        yillikToplam: yillikToplam
    };
} 