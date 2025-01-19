// İklim verileri
const iklimVerileri = {
    maxSicaklik: [4.1, 6.4, 11.9, 17.2, 21.0, 26.2, 29.8, 29.8, 25.8, 19.6, 12.9, 6.4],
    minSicaklik: [-3.3, -2.3, 0.8, 5.4, 8.9, 12.5, 15.3, 15.1, 10.9, 6.8, 2.5, -0.7],
    nem: [77.1, 75.9, 66.4, 59.6, 59.4, 52.9, 44.1, 42.4, 47.6, 58.3, 69.3, 78.0],
    ruzgarHizi: [181.4, 207.4, 216.0, 207.4, 172.8, 190.1, 216.0, 207.4, 181.4, 181.4, 172.8, 181.4],
    guneslenme: [2.36, 2.83, 4.30, 5.84, 7.88, 10.02, 11.65, 11.25, 9.00, 6.66, 4.46, 2.09],
    yagis: [47.0, 36.3, 36.3, 48.3, 54.6, 37.4, 13.8, 12.4, 19.3, 26.8, 33.4, 49.0]
};

// Bitki katsayıları (Kc)
const bitkiKatsayilari = {
    bugday: { baslangic: 0.3, orta: 1.15, son: 0.4 },
    arpa: { baslangic: 0.3, orta: 1.15, son: 0.25 },
    yulaf: { baslangic: 0.3, orta: 1.15, son: 0.25 },
    sekerpancari: { baslangic: 0.35, orta: 1.2, son: 0.7 },
    silajlikmisir: { baslangic: 0.3, orta: 1.2, son: 0.35 },
    danemisir: { baslangic: 0.3, orta: 1.2, son: 0.35 },
    domates: { baslangic: 0.6, orta: 1.15, son: 0.8 },
    salatalik: { baslangic: 0.6, orta: 1.0, son: 0.75 },
    biber: { baslangic: 0.6, orta: 1.05, son: 0.9 },
    aycicegi: { baslangic: 0.35, orta: 1.15, son: 0.35 },
    fasulye: { baslangic: 0.4, orta: 1.15, son: 0.35 },
    karnabahar: { baslangic: 0.7, orta: 1.05, son: 0.95 },
    lahana: { baslangic: 0.7, orta: 1.05, son: 0.95 },
    brokoli: { baslangic: 0.7, orta: 1.05, son: 0.95 },
    kivircik: { baslangic: 0.7, orta: 1.0, son: 0.95 }
};

// Toprak özellikleri
const toprakTipleri = {
    hafif: {
        name: "Light (sand)",
        TAM: 60.0,  // Total available moisture (mm/meter)
        infiltrasyon: 40, // mm/day
        derinlik: 900, // cm
        baslangicNem: 60.0 // mm/meter
    },
    orta: {
        name: "Medium (loam)",
        TAM: 290.0,
        infiltrasyon: 40,
        derinlik: 900,
        baslangicNem: 290.0
    },
    agir: {
        name: "Heavy (clay)",
        TAM: 200.0,
        infiltrasyon: 40,
        derinlik: 900,
        baslangicNem: 200.0
    }
};

// Bitki gelişim dönemleri (gün olarak)
const bitkiGelisimDonemleri = {
    bugday: {
        ekim: "15/10",    // 15 Ekim
        hasat: "15/06",   // 15 Haziran
        donemler: {
            baslangic: 30,
            gelisme: 140,
            orta: 40,
            son: 30
        },
        Kc: bitkiKatsayilari.bugday
    },
    arpa: {
        ekim: "15/10",    // 15 Ekim
        hasat: "15/05",   // 15 Mayıs
        donemler: {
            baslangic: 30,
            gelisme: 130,
            orta: 40,
            son: 30
        },
        Kc: bitkiKatsayilari.arpa
    },
    yulaf: {
        ekim: "15/10",    // 15 Ekim
        hasat: "15/06",   // 15 Haziran
        donemler: {
            baslangic: 30,
            gelisme: 140,
            orta: 40,
            son: 30
        },
        Kc: bitkiKatsayilari.yulaf
    },
    sekerpancari: {
        ekim: "15/03",    // 15 Mart
        hasat: "15/09",   // 15 Eylül
        donemler: {
            baslangic: 35,
            gelisme: 60,
            orta: 70,
            son: 40
        },
        Kc: bitkiKatsayilari.sekerpancari
    },
    silajlikmisir: {
        ekim: "15/04",    // 15 Nisan
        hasat: "15/08",   // 15 Ağustos
        donemler: {
            baslangic: 30,
            gelisme: 40,
            orta: 50,
            son: 30
        },
        Kc: bitkiKatsayilari.silajlikmisir
    },
    danemisir: {
        ekim: "15/04",    // 15 Nisan
        hasat: "15/09",   // 15 Eylül
        donemler: {
            baslangic: 30,
            gelisme: 40,
            orta: 50,
            son: 55
        },
        Kc: bitkiKatsayilari.danemisir
    },
    domates: {
        ekim: "15/04",    // 15 Nisan
        hasat: "06/09",   // 6 Eylül
        donemler: {
            baslangic: 30,
            gelisme: 40,
            orta: 45,
            son: 30
        },
        Kc: bitkiKatsayilari.domates
    },
    salatalik: {
        ekim: "15/04",    // 15 Nisan
        hasat: "15/08",   // 15 Ağustos
        donemler: {
            baslangic: 25,
            gelisme: 35,
            orta: 50,
            son: 20
        },
        Kc: bitkiKatsayilari.salatalik
    },
    biber: {
        ekim: "15/03",    // 15 Mart
        hasat: "15/08",   // 15 Ağustos
        donemler: {
            baslangic: 30,
            gelisme: 35,
            orta: 40,
            son: 20
        },
        Kc: bitkiKatsayilari.biber
    },
    aycicegi: {
        ekim: "15/03",    // 15 Mart
        hasat: "15/08",   // 15 Ağustos
        donemler: {
            baslangic: 25,
            gelisme: 35,
            orta: 45,
            son: 25
        },
        Kc: bitkiKatsayilari.aycicegi
    },
    fasulye: {
        ekim: "15/04",    // 15 Nisan
        hasat: "15/07",   // 15 Temmuz
        donemler: {
            baslangic: 20,
            gelisme: 30,
            orta: 30,
            son: 10
        },
        Kc: bitkiKatsayilari.fasulye
    },
    karnabahar: {
        ekim: "15/06",    // 15 Haziran
        hasat: "15/09",   // 15 Eylül
        donemler: {
            baslangic: 35,
            gelisme: 50,
            orta: 40,
            son: 15
        },
        Kc: bitkiKatsayilari.karnabahar
    },
    lahana: {
        ekim: "15/05",    // 15 Mayıs
        hasat: "15/09",   // 15 Eylül
        donemler: {
            baslangic: 40,
            gelisme: 60,
            orta: 50,
            son: 15
        },
        Kc: bitkiKatsayilari.lahana
    },
    brokoli: {
        ekim: "15/06",    // 15 Haziran
        hasat: "15/09",   // 15 Eylül
        donemler: {
            baslangic: 35,
            gelisme: 45,
            orta: 40,
            son: 15
        },
        Kc: bitkiKatsayilari.brokoli
    },
    kivircik: {
        ekim: "15/02",    // 15 Şubat
        hasat: "15/04",   // 15 Nisan
        donemler: {
            baslangic: 25,
            gelisme: 35,
            orta: 30,
            son: 10
        },
        Kc: bitkiKatsayilari.kivircik
    }
};

function hesaplaGunlukKc(bitki, tarih) {
    const donem = bitkiGelisimDonemleri[bitki];
    if (!donem) return 0;

    const ekimTarihi = new Date(2024, 3, 15); // 15 Nisan 2024
    const gunFarki = Math.floor((tarih - ekimTarihi) / (1000 * 60 * 60 * 24));
    
    if (gunFarki < 0 || gunFarki > donem.donemler.baslangic + donem.donemler.gelisme + 
        donem.donemler.orta + donem.donemler.son) {
        return 0;
    }

    // Başlangıç dönemi
    if (gunFarki <= donem.donemler.baslangic) {
        return donem.Kc.baslangic;
    }
    
    // Gelişme dönemi
    if (gunFarki <= donem.donemler.baslangic + donem.donemler.gelisme) {
        const gelismeSureci = (gunFarki - donem.donemler.baslangic) / donem.donemler.gelisme;
        return donem.Kc.baslangic + (donem.Kc.orta - donem.Kc.baslangic) * gelismeSureci;
    }
    
    // Orta dönem
    if (gunFarki <= donem.donemler.baslangic + donem.donemler.gelisme + donem.donemler.orta) {
        return donem.Kc.orta;
    }
    
    // Son dönem
    const sonSureci = (gunFarki - (donem.donemler.baslangic + donem.donemler.gelisme + 
                      donem.donemler.orta)) / donem.donemler.son;
    return donem.Kc.orta - (donem.Kc.orta - donem.Kc.son) * sonSureci;
}

function hesaplaGunlukSulama(bitki, tarih, toprakTipi) {
    const ay = tarih.getMonth();
    const ETo = hesaplaETo(ay);
    const Kc = hesaplaGunlukKc(bitki, tarih);
    const ETc = ETo * Kc;
    
    const toprak = toprakTipleri[toprakTipi];
    const gunlukYagis = iklimVerileri.yagis[ay] / 30; // Basitleştirilmiş günlük yağış
    const efektifYagis = gunlukYagis * 0.8;
    
    return {
        tarih: tarih,
        ETo: ETo,
        Kc: Kc,
        ETc: ETc,
        efektifYagis: efektifYagis,
        sulamaIhtiyaci: Math.max(0, ETc - efektifYagis)
    };
}

function hesaplaSulamaProgrami() {
    const bitkiSecimi = document.getElementById('bitkiSecimi').value;
    const toprakTipi = document.getElementById('toprakTipi').value;
    
    const bitki = bitkiGelisimDonemleri[bitkiSecimi];
    if (!bitki) {
        alert('Lütfen bir bitki seçiniz!');
        return;
    }

    // Ekim ve hasat tarihlerini parse et
    const [ekimGun, ekimAy] = bitki.ekim.split('/').map(Number);
    const [hasatGun, hasatAy] = bitki.hasat.split('/').map(Number);
    
    const baslangicTarihi = new Date(2024, ekimAy - 1, ekimGun);
    const bitisTarihi = new Date(2024, hasatAy - 1, hasatGun);
    
    // Eğer hasat tarihi ekim tarihinden önceyse, hasat yılını bir sonraki yıl yap
    if (bitisTarihi < baslangicTarihi) {
        bitisTarihi.setFullYear(2025);
    }
    
    // Yetiştirme dönemi için günlük hesaplamalar
    const sulamaVerileri = [];
    for (let tarih = new Date(baslangicTarihi); tarih <= bitisTarihi; 
         tarih.setDate(tarih.getDate() + 1)) {
        const gunlukVeri = hesaplaGunlukSulama(bitkiSecimi, new Date(tarih), toprakTipi);
        sulamaVerileri.push(gunlukVeri);
    }
    
    // Sonuçları göster
    gosterSonuclar(sulamaVerileri);
}

// Radyasyon hesaplama fonksiyonu
function hesaplaRadyasyon(ay, enlem = 39.57) { // Ankara'nın enlemi
    const J = ay * 30 + 15; // Yılın günü (ayın ortası)
    
    // Güneş deklinasyonu
    const delta = 0.409 * Math.sin(2 * Math.PI * J / 365 - 1.39);
    
    // Gün batımı açısı
    const ws = Math.acos(-Math.tan(enlem * Math.PI / 180) * Math.tan(delta));
    
    // Dünya dışı radyasyon
    const dr = 1 + 0.033 * Math.cos(2 * Math.PI * J / 365);
    const Ra = 24 * 60 / Math.PI * 0.0820 * dr * (
        ws * Math.sin(enlem * Math.PI / 180) * Math.sin(delta) +
        Math.cos(enlem * Math.PI / 180) * Math.cos(delta) * Math.sin(ws)
    );
    
    // Güneşlenme süresi oranı (n/N)
    const N = 24 * ws / Math.PI;
    const n = iklimVerileri.guneslenme[ay];
    const nN = n / N;
    
    // Solar radyasyon (Rs)
    const Rs = (0.25 + 0.50 * nN) * Ra;
    
    return { Ra, Rs, nN };
}

function hesaplaETo(ay) {
    // Sıcaklık ve nem verileri
    const Tmax = iklimVerileri.maxSicaklik[ay];
    const Tmin = iklimVerileri.minSicaklik[ay];
    const Tmean = (Tmax + Tmin) / 2;
    const RH = iklimVerileri.nem[ay];
    const u2 = iklimVerileri.ruzgarHizi[ay] * (1000 / 86400); // yaklaşık 0.011574
    const n = iklimVerileri.guneslenme[ay];
    const altitude = 891; // Ankara için rakım
    const latitude = 39.57; // Ankara'nın enlemi
    const day = 15; // Ayın ortası için

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
    const ea = hesaplaBuharBasinci(Tmean, RH);

    // Buhar basıncı açığı
    const vpd = es - ea;

    // Radyasyon hesaplamaları
    const J = Math.floor((275 * (ay + 1) / 9) - 30 + day);
    const dr = 1 + 0.033 * Math.cos(2 * Math.PI * J / 365);
    const delta_rad = 0.409 * Math.sin(2 * Math.PI * J / 365 - 1.39);
    const phi = latitude * Math.PI / 180;
    const ws = Math.acos(-Math.tan(phi) * Math.tan(delta_rad));
    
    // Atmosfer dışı radyasyon - düzeltilmiş versiyon
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

    return Math.max(0, ET0);
}

// Buhar basıncı hesaplama fonksiyonunu ekleyelim
function hesaplaBuharBasinci(sicaklik, bagilNem) {
    const es = 0.6108 * Math.exp((17.27 * sicaklik) / (sicaklik + 237.3));
    return es * (bagilNem / 100);
}

function formatTarih(tarih) {
    return `${tarih.getDate().toString().padStart(2, '0')}/${(tarih.getMonth() + 1).toString().padStart(2, '0')}`;
}

function gosterSonuclar(sulamaVerileri) {
    // Aylık verileri grupla
    const aylikGruplar = sulamaVerileri.reduce((gruplar, veri) => {
        const ayAdi = new Date(veri.tarih).toLocaleString('tr-TR', { month: 'long' });
        if (!gruplar[ayAdi]) {
            gruplar[ayAdi] = {
                gunler: [],
                toplamETo: 0,
                toplamETc: 0,
                toplamYagis: 0,
                toplamSulama: 0
            };
        }
        gruplar[ayAdi].gunler.push(veri);
        gruplar[ayAdi].toplamETo += veri.ETo;
        gruplar[ayAdi].toplamETc += veri.ETc;
        gruplar[ayAdi].toplamYagis += veri.efektifYagis;
        gruplar[ayAdi].toplamSulama += veri.sulamaIhtiyaci;
        return gruplar;
    }, {});

    let toplamSulamaIhtiyaci = 0;
    let toplamEfektifYagis = 0;
    
    const sonucHTML = `
        <div class="card mt-4">
            <div class="card-body">
                <h5 class="card-title">Sulama Programı</h5>
                <div class="table-responsive">
                    <table class="table table-sm">
                        <thead>
                            <tr>
                                <th>Dönem</th>
                                <th>Ort. Kc</th>
                                <th>ETo (mm)</th>
                                <th>ETc (mm)</th>
                                <th>Efektif Yağış (mm)</th>
                                <th>Net Sulama İhtiyacı (mm)</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${Object.entries(aylikGruplar).map(([ay, data]) => {
                                const ortKc = data.gunler.reduce((sum, g) => sum + g.Kc, 0) / data.gunler.length;
                                toplamSulamaIhtiyaci += data.toplamSulama;
                                toplamEfektifYagis += data.toplamYagis;
                                return `
                                    <tr class="ay-ozet" data-ay="${ay}" style="cursor: pointer; background-color: #f8f9fa;">
                                        <td><i class="fas fa-chevron-right"></i> ${ay}</td>
                                        <td>${ortKc.toFixed(2)}</td>
                                        <td>${data.toplamETo.toFixed(1)}</td>
                                        <td>${data.toplamETc.toFixed(1)}</td>
                                        <td>${data.toplamYagis.toFixed(1)}</td>
                                        <td>${data.toplamSulama.toFixed(1)}</td>
                                    </tr>
                                    <tr class="gunluk-detay" data-ay="${ay}" style="display: none;">
                                        <td colspan="6">
                                            <div class="table-responsive">
                                                <table class="table table-sm table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Tarih</th>
                                                            <th>Kc</th>
                                                            <th>ETo (mm)</th>
                                                            <th>ETc (mm)</th>
                                                            <th>Efektif Yağış (mm)</th>
                                                            <th>Net Sulama İhtiyacı (mm)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        ${data.gunler.map(veri => `
                                                            <tr>
                                                                <td>${formatTarih(veri.tarih)}</td>
                                                                <td>${veri.Kc.toFixed(2)}</td>
                                                                <td>${veri.ETo.toFixed(1)}</td>
                                                                <td>${veri.ETc.toFixed(1)}</td>
                                                                <td>${veri.efektifYagis.toFixed(1)}</td>
                                                                <td>${veri.sulamaIhtiyaci.toFixed(1)}</td>
                                                            </tr>
                                                        `).join('')}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </td>
                                    </tr>
                                `;
                            }).join('')}
                            <tr class="table-primary">
                                <td colspan="4"><strong>Toplam</strong></td>
                                <td><strong>${toplamEfektifYagis.toFixed(1)} mm</strong></td>
                                <td><strong>${toplamSulamaIhtiyaci.toFixed(1)} mm</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('sonuclar').innerHTML = sonucHTML;

    // Tıklama olaylarını ekle
    document.querySelectorAll('.ay-ozet').forEach(row => {
        row.addEventListener('click', function() {
            const ay = this.getAttribute('data-ay');
            const detayRow = document.querySelector(`.gunluk-detay[data-ay="${ay}"]`);
            const chevron = this.querySelector('i');
            
            if (detayRow.style.display === 'none') {
                detayRow.style.display = 'table-row';
                chevron.classList.remove('fa-chevron-right');
                chevron.classList.add('fa-chevron-down');
                this.style.backgroundColor = '#e9ecef';
            } else {
                detayRow.style.display = 'none';
                chevron.classList.remove('fa-chevron-down');
                chevron.classList.add('fa-chevron-right');
                this.style.backgroundColor = '#f8f9fa';
            }
        });
    });
} 