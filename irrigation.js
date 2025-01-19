// Tüm JS kodlarını birleştiriyoruz
const IrrigationApp = {
    // İklim verileri
    iklimVerileri: {
        maxSicaklik: [4.1, 6.4, 11.9, 17.2, 21.0, 26.2, 29.8, 29.8, 25.8, 19.6, 12.9, 6.4],
        minSicaklik: [-3.3, -2.3, 0.8, 5.4, 8.9, 12.5, 15.3, 15.1, 10.9, 6.8, 2.5, -0.7],
        nem: [77.1, 75.9, 66.4, 59.6, 59.4, 52.9, 44.1, 42.4, 47.6, 58.3, 69.3, 78.0],
        ruzgarHizi: [181.4, 207.4, 216.0, 207.4, 172.8, 190.1, 216.0, 207.4, 181.4, 181.4, 172.8, 181.4],
        guneslenme: [2.36, 2.83, 4.30, 5.84, 7.88, 10.02, 11.65, 11.25, 9.00, 6.66, 4.46, 2.09],
        yagis: [47.0, 36.3, 36.3, 48.3, 54.6, 37.4, 13.8, 12.4, 19.3, 26.8, 33.4, 49.0]
    },

    // Bitki verileri
    bitkiVerileri: {
        bugday: {
            ad: "Buğday",
            maliyet: 2500,
            fiyat: 8.5,
            verim: 450,
            sulamaSuresi: "10/15-6/15",
            sulamaRandimani: 0.65,
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
            sulamaSuresi: "10/15-5/15",
            sulamaRandimani: 0.65,
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
        sekerpancari: {
            ad: "Şeker Pancarı",
            maliyet: 8000,
            fiyat: 1.5,
            verim: 7000,
            sulamaSuresi: "3/15-9/15",
            sulamaRandimani: 0.65,
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
        silajlikmisir: {
            ad: "Silajlık Mısır",
            maliyet: 5000,
            fiyat: 1.2,
            verim: 6000,
            sulamaSuresi: "4/15-8/15",
            sulamaRandimani: 0.90,
            Kc: {
                baslangic: 0.3,
                orta: 1.2,
                son: 0.35
            },
            donemler: {
                baslangic: 20,
                gelisme: 35,
                orta: 40,
                son: 25,
                toplam: 120
            }
        },
        danemisir: {
            ad: "Dane Mısır",
            maliyet: 5500,
            fiyat: 8.0,
            verim: 1200,
            sulamaSuresi: "4/15-9/15",
            sulamaRandimani: 0.90,
            Kc: {
                baslangic: 0.3,
                orta: 1.2,
                son: 0.35
            },
            donemler: {
                baslangic: 25,
                gelisme: 40,
                orta: 45,
                son: 30,
                toplam: 140
            }
        },
        domates: {
            ad: "Domates",
            maliyet: 12000,
            fiyat: 5.0,
            verim: 8000,
            sulamaSuresi: "4/1-9/15",
            sulamaRandimani: 0.90,
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
            maliyet: 10000,
            fiyat: 4.0,
            verim: 7000,
            sulamaSuresi: "4/15-9/1",
            sulamaRandimani: 0.90,
            Kc: {
                baslangic: 0.6,
                orta: 1.0,
                son: 0.75
            },
            donemler: {
                baslangic: 25,
                gelisme: 35,
                orta: 40,
                son: 20,
                toplam: 120
            }
        },
        biber: {
            ad: "Biber",
            maliyet: 11000,
            fiyat: 6.0,
            verim: 4000,
            sulamaSuresi: "4/15-9/15",
            sulamaRandimani: 0.90,
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
        }
    },

    // Temel hesaplama fonksiyonları
    core: {
        hesaplaBuharBasinci(sicaklik, bagilNem) {
            const es = 0.6108 * Math.exp((17.27 * sicaklik) / (sicaklik + 237.3));
            return es * (bagilNem / 100);
        },

        hesaplaETo(ay) {
            // this bağlamını düzeltmek için IrrigationApp'e referans verelim
            const iklimVerileri = IrrigationApp.iklimVerileri;
            
            const Tmax = iklimVerileri.maxSicaklik[ay];
            const Tmin = iklimVerileri.minSicaklik[ay];
            const Tmean = (Tmax + Tmin) / 2;
            const RH = iklimVerileri.nem[ay];
            const u2 = iklimVerileri.ruzgarHizi[ay] * (1000 / 86400);
            const n = iklimVerileri.guneslenme[ay];
            
            // Sabit değerler
            const altitude = 891;
            const latitude = 39.57;
            const day = 15;

            // ETo hesaplama
            const P = 101.3 * Math.pow((293 - 0.0065 * altitude) / 293, 5.26);
            const gamma = 0.000665 * P;
            const delta = 4098 * (0.6108 * Math.exp(17.27 * Tmean / (Tmean + 237.3))) / Math.pow((Tmean + 237.3), 2);
            const ea = this.hesaplaBuharBasinci(Tmean, RH);
            const es_Tmax = 0.6108 * Math.exp(17.27 * Tmax / (Tmax + 237.3));
            const es_Tmin = 0.6108 * Math.exp(17.27 * Tmin / (Tmin + 237.3));
            const es = (es_Tmax + es_Tmin) / 2;
            const vpd = es - ea;

            // Radyasyon hesaplamaları
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
        },

        hesaplaSuIhtiyaci(bitkiSecimi, toprakTipi = 'orta') {
            const bitki = IrrigationApp.bitkiVerileri[bitkiSecimi];
            
            // Ekim ve hasat aylarını al
            const [ekimAy, ekimGun] = bitki.sulamaSuresi.split('-')[0].split('/').map(Number);
            const [hasatAy, hasatGun] = bitki.sulamaSuresi.split('-')[1].split('/').map(Number);
            
            // Toprak tipine göre efektif yağış katsayısı
            const efektifYagisKatsayisi = {
                'hafif': 0.55,  // Kumlu topraklar için
                'orta': 0.70,   // Tınlı topraklar için
                'agir': 0.85    // Killi topraklar için
            };

            // Toprak tipine göre sulama randımanı düzeltme katsayısı
            const randimaDuzeltmeKatsayisi = {
                'hafif': 0.9,   // Kumlu topraklarda daha düşük randıman
                'orta': 1.0,    // Referans değer
                'agir': 1.1     // Killi topraklarda daha yüksek randıman
            };

            let toplamSuIhtiyaci = 0;
            
            for (let ay = 0; ay < 12; ay++) {
                const ayNo = ay + 1;
                
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
                    const ETo = this.hesaplaETo(ay);
                    const Kc = this.hesaplaKc(bitkiSecimi, ayNo, ekimAy);
                    const ETc = ETo * Kc;
                    const gunSayisi = new Date(2024, ay + 1, 0).getDate();
                    const aylikETc = ETc * gunSayisi;
                    
                    // Efektif yağış hesabı toprak tipine göre düzeltildi
                    const efektifYagis = IrrigationApp.iklimVerileri.yagis[ay] * 
                                        efektifYagisKatsayisi[toprakTipi];
                    
                    const suIhtiyaci = Math.max(0, aylikETc - efektifYagis);
                    
                    // Sulama randımanı toprak tipine göre düzeltildi
                    const duzeltilmisRandiman = bitki.sulamaRandimani * 
                                          randimaDuzeltmeKatsayisi[toprakTipi];
                    
                    toplamSuIhtiyaci += suIhtiyaci / duzeltilmisRandiman;
                }
            }
            
            return toplamSuIhtiyaci;
        },

        hesaplaKc(bitkiSecimi, ayNo, ekimAy) {
            const bitki = IrrigationApp.bitkiVerileri[bitkiSecimi];
            let gunSayisi;
            
            if (ayNo >= ekimAy) {
                gunSayisi = (ayNo - ekimAy) * 30 + 15;
            } else {
                gunSayisi = ((12 - ekimAy) + ayNo) * 30 + 15;
            }
            
            const donemler = bitki.donemler;
            
            if (gunSayisi <= donemler.baslangic) {
                return bitki.Kc.baslangic;
            } else if (gunSayisi <= donemler.baslangic + donemler.gelisme) {
                const gelismeSureci = (gunSayisi - donemler.baslangic) / donemler.gelisme;
                return bitki.Kc.baslangic + (bitki.Kc.orta - bitki.Kc.baslangic) * gelismeSureci;
            } else if (gunSayisi <= donemler.baslangic + donemler.gelisme + donemler.orta) {
                return bitki.Kc.orta;
            } else {
                return bitki.Kc.son;
            }
        }
    },

    // Sayfa spesifik fonksiyonlar
    anaSayfa: {
        hesaplaSulamaProgrami() {
            const bitkiSecimi = document.getElementById('bitkiSecimi').value;
            const toprakTipi = document.getElementById('toprakTipi').value;
            
            const suIhtiyaci = IrrigationApp.core.hesaplaSuIhtiyaci(bitkiSecimi, toprakTipi);
            
            // Sonuçları göster
            const sonucHTML = `
                <div class="alert alert-info">
                    <h5>Sulama Programı Sonuçları</h5>
                    <p>Seçilen Bitki: ${IrrigationApp.bitkiVerileri[bitkiSecimi].ad}</p>
                    <p>Toprak Tipi: ${toprakTipi.charAt(0).toUpperCase() + toprakTipi.slice(1)}</p>
                    <p>Yıllık Su İhtiyacı: ${Math.round(suIhtiyaci).toLocaleString()} m³/da</p>
                </div>
            `;
            
            document.getElementById('sonuclar').innerHTML = sonucHTML;
        }
    },

    etoHesaplama: {
        hesaplaEToAnkara() {
            const ay = parseInt(document.getElementById('ay-secimi').value);
            const ETo = IrrigationApp.core.hesaplaETo(ay);
            
            // İklim verilerini göster
            const iklimHTML = `
                <table class="table table-sm">
                    <tr>
                        <td>Maksimum Sıcaklık:</td>
                        <td>${IrrigationApp.iklimVerileri.maxSicaklik[ay].toFixed(1)} °C</td>
                    </tr>
                    <tr>
                        <td>Minimum Sıcaklık:</td>
                        <td>${IrrigationApp.iklimVerileri.minSicaklik[ay].toFixed(1)} °C</td>
                    </tr>
                    <tr>
                        <td>Bağıl Nem:</td>
                        <td>${IrrigationApp.iklimVerileri.nem[ay].toFixed(1)} %</td>
                    </tr>
                    <tr>
                        <td>Rüzgar Hızı:</td>
                        <td>${(IrrigationApp.iklimVerileri.ruzgarHizi[ay] * (1000/86400)).toFixed(2)} m/s</td>
                    </tr>
                    <tr>
                        <td>Güneşlenme Süresi:</td>
                        <td>${IrrigationApp.iklimVerileri.guneslenme[ay].toFixed(2)} saat</td>
                    </tr>
                </table>
            `;
            
            document.getElementById('iklim-verileri').innerHTML = iklimHTML;
            
            // ETo sonucunu göster
            const sonucHTML = `
                <div class="alert alert-success">
                    <h6>Referans Evapotranspirasyon (ETo)</h6>
                    <p class="display-4 mb-0">${ETo.toFixed(2)} <small>mm/gün</small></p>
                </div>
            `;
            
            document.getElementById('sonuclar').innerHTML = sonucHTML;
        },

        karsilastirHesaplamalar() {
            const ay = parseInt(document.getElementById('ay-secimi').value);
            const ETo = IrrigationApp.core.hesaplaETo(ay);
            
            alert(`Hesaplanan ETo değeri: ${ETo.toFixed(2)} mm/gün`);
        }
    },

    suOptimizasyon: {
        yeniBeyanEkle() {
            const beyanlarDiv = document.getElementById('beyanlar');
            const yeniBeyan = document.createElement('div');
            yeniBeyan.className = 'beyan-grup mb-3';
            yeniBeyan.innerHTML = `
                <div class="row">
                    <div class="col-md-5">
                        <select class="form-control bitki-secim">
                            <optgroup label="Yağmurlama Sulama">
                                <option value="bugday">Buğday</option>
                                <option value="arpa">Arpa</option>
                                <option value="yulaf">Yulaf</option>
                                <option value="sekerpancari">Şeker Pancarı</option>
                            </optgroup>
                            <optgroup label="Damla Sulama">
                                <option value="silajlikmisir">Silajlık Mısır</option>
                                <option value="danemisir">Dane Mısır</option>
                                <option value="domates">Domates</option>
                                <option value="salatalik">Salatalık</option>
                                <option value="biber">Biber</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-md-5">
                        <input type="number" class="form-control alan-input" placeholder="Alan (dekar)">
                    </div>
                    <div class="col-md-2">
                        <button class="btn btn-danger btn-sm beyan-sil">
                            Sil
                        </button>
                    </div>
                </div>
            `;
            
            // Sil butonu için event listener ekle
            const silButton = yeniBeyan.querySelector('.beyan-sil');
            silButton.addEventListener('click', (e) => {
                IrrigationApp.suOptimizasyon.beyanSil(e.target);
            });
            
            beyanlarDiv.appendChild(yeniBeyan);
        },

        beyanSil(button) {
            button.closest('.beyan-grup').remove();
        },

        hesaplaOptimizasyon() {
            const suKapasitesi = parseFloat(document.getElementById('suKapasitesi').value);
            const toplamAlan = parseFloat(document.getElementById('toplamAlan').value);
            
            // Hata kontrolü
            if (isNaN(suKapasitesi) || suKapasitesi <= 0) {
                alert('Lütfen geçerli bir su kapasitesi giriniz.');
                return;
            }
            
            if (isNaN(toplamAlan) || toplamAlan <= 0) {
                alert('Lütfen geçerli bir toplam alan giriniz.');
                return;
            }
            
            const beyanlar = [];
            document.querySelectorAll('.beyan-grup').forEach(beyan => {
                const bitki = beyan.querySelector('.bitki-secim').value;
                const alan = parseFloat(beyan.querySelector('.alan-input').value);
                
                const netSuIhtiyaci = IrrigationApp.core.hesaplaSuIhtiyaci(bitki);
                const brutSuIhtiyaci = (netSuIhtiyaci * alan) / IrrigationApp.bitkiVerileri[bitki].sulamaRandimani;
                
                beyanlar.push({ 
                    bitki, 
                    alan, 
                    suIhtiyaci: brutSuIhtiyaci,
                    karlilik: (IrrigationApp.bitkiVerileri[bitki].fiyat * 
                              IrrigationApp.bitkiVerileri[bitki].verim - 
                              IrrigationApp.bitkiVerileri[bitki].maliyet) / brutSuIhtiyaci
                });
            });

            // Toplam değerleri hesapla
            const toplamSuIhtiyaci = beyanlar.reduce((sum, item) => sum + item.suIhtiyaci, 0);
            const toplamKar = beyanlar.reduce((sum, item) => sum + 
                (IrrigationApp.bitkiVerileri[item.bitki].fiyat * 
                 IrrigationApp.bitkiVerileri[item.bitki].verim - 
                 IrrigationApp.bitkiVerileri[item.bitki].maliyet) * item.alan, 0);
            
            // Sonuçları göster
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
                                <td>${IrrigationApp.bitkiVerileri[item.bitki].ad}</td>
                                <td>${item.alan}</td>
                                <td>${Math.round(item.suIhtiyaci).toLocaleString()}</td>
                                <td>${Math.round((IrrigationApp.bitkiVerileri[item.bitki].fiyat * 
                                     IrrigationApp.bitkiVerileri[item.bitki].verim - 
                                     IrrigationApp.bitkiVerileri[item.bitki].maliyet) * 
                                     item.alan).toLocaleString()}</td>
                            </tr>
                        `).join('')}
                        <tr class="table-primary">
                            <td colspan="2"><strong>Toplam</strong></td>
                            <td><strong>${Math.round(toplamSuIhtiyaci).toLocaleString()} m³</strong></td>
                            <td><strong>${Math.round(toplamKar).toLocaleString()} TL</strong></td>
                        </tr>
                    </tbody>
                </table>
            `;
            
            document.getElementById('sonuclar').innerHTML = sonucHTML;

            // Su yetersizse öneriler oluştur
            if (toplamSuIhtiyaci > suKapasitesi) {
                const eksikSu = toplamSuIhtiyaci - suKapasitesi;
                const onerilerHTML = `
                    <div class="alert alert-warning">
                        <h6>Su Yetersizliği Tespit Edildi</h6>
                        <p>Toplam su ihtiyacı, mevcut kapasiteden ${Math.round(eksikSu).toLocaleString()} m³ fazladır.</p>
                        
                        <h6 class="mt-3">Öneriler:</h6>
                        <ol>
                            <li>Karlılık Analizi:
                                <ul>
                                    ${beyanlar.sort((a, b) => a.karlilik - b.karlilik)
                                        .map(item => `
                                            <li>${IrrigationApp.bitkiVerileri[item.bitki].ad}: 
                                                ${Math.round(item.karlilik * 100) / 100} TL/m³</li>
                                        `).join('')}
                                </ul>
                                En düşük karlılığa sahip bitkilerden başlayarak alan azaltılabilir.
                            </li>
                            <li>Sulama Yöntemi İyileştirmesi:
                                <ul>
                                    ${beyanlar.filter(item => IrrigationApp.bitkiVerileri[item.bitki].sulamaRandimani < 0.9)
                                        .map(item => `
                                            <li>${IrrigationApp.bitkiVerileri[item.bitki].ad} için modern sulama sistemlerine 
                                                geçiş ile %${Math.round((0.9 - IrrigationApp.bitkiVerileri[item.bitki].sulamaRandimani) * 100)} 
                                                su tasarrufu sağlanabilir.</li>
                                        `).join('')}
                                </ul>
                            </li>
                            <li>Alternatif Bitkiler:
                                <ul>
                                    <li>Kuraklığa dayanıklı alternatif bitkiler tercih edilebilir.</li>
                                    <li>Erken olgunlaşan çeşitler seçilebilir.</li>
                                    <li>Su ihtiyacı daha düşük olan bitkiler değerlendirilebilir.</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                `;
                
                document.getElementById('oneriler').innerHTML = onerilerHTML;
            } else {
                document.getElementById('oneriler').innerHTML = `
                    <div class="alert alert-success">
                        Su kaynağı mevcut bitki deseni için yeterlidir.
                    </div>
                `;
            }
        }
    },

    // Yardımcı fonksiyonlar
    utils: {
        formatTarih(tarih) {
            return `${tarih.getDate().toString().padStart(2, '0')}/${(tarih.getMonth() + 1).toString().padStart(2, '0')}`;
        }
    },

    // Su optimizasyonu sayfası için başlangıç fonksiyonu ekleyelim
    init: {
        anaSayfa() {
            // Ana sayfa event listener'ları
            document.getElementById('bitkiSecimi')?.addEventListener('change', () => {
                IrrigationApp.anaSayfa.hesaplaSulamaProgrami();
            });
            
            document.getElementById('toprakTipi')?.addEventListener('change', () => {
                IrrigationApp.anaSayfa.hesaplaSulamaProgrami();
            });
        },
        
        etoHesaplama() {
            // ETo hesaplama sayfası event listener'ları
            document.querySelector('button[onclick="hesaplaEToAnkara()"]')?.addEventListener('click', () => {
                IrrigationApp.etoHesaplama.hesaplaEToAnkara();
            });
            
            document.querySelector('button[onclick="karsilastirHesaplamalar()"]')?.addEventListener('click', () => {
                IrrigationApp.etoHesaplama.karsilastirHesaplamalar();
            });
        },
        
        suOptimizasyon() {
            // İlk beyanı ekle
            IrrigationApp.suOptimizasyon.yeniBeyanEkle();
            
            // Event listener'ları ekle
            document.getElementById('yeniBeyanEkle')?.addEventListener('click', () => {
                IrrigationApp.suOptimizasyon.yeniBeyanEkle();
            });
            
            document.getElementById('optimizasyonYap')?.addEventListener('click', () => {
                IrrigationApp.suOptimizasyon.hesaplaOptimizasyon();
            });
        }
    }
};

// Sayfa yüklendiğinde gerekli başlatma işlemleri
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = document.body.dataset.page;
    
    switch(currentPage) {
        case 'anaSayfa':
            IrrigationApp.init.anaSayfa();
            // İlk yükleme için hesapla
            IrrigationApp.anaSayfa.hesaplaSulamaProgrami();
            break;
            
        case 'etoHesaplama':
            IrrigationApp.init.etoHesaplama();
            // İlk yükleme için hesapla
            IrrigationApp.etoHesaplama.hesaplaEToAnkara();
            break;
            
        case 'suOptimizasyon':
            IrrigationApp.init.suOptimizasyon();
            break;
    }
}); 