# İş Emri Yönetim Sistemi

Bu proje, Flask tabanlı bir iş emri yönetim sistemidir. Aşağıdaki adımları izleyerek Ubuntu üzerinde projeyi kurabilir ve çalıştırabilirsiniz.

## Gereksinimler

- Python 3.8 veya üzeri
- pip (Python paket yöneticisi)
- virtualenv (sanal ortam oluşturmak için)
- SQLite (varsayılan veritabanı)

## Kurulum Adımları

1. **Depoyu Klonlayın**
   ```bash
   git clone <repository-url>
   cd isemri
   ```

2. **Sanal Ortam Oluşturun ve Aktif Edin**
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Gerekli Paketleri Yükleyin**
   ```bash
   pip install -r requirements.txt
   ```

4. **Veritabanı Klasörünü Oluşturun**
   ```bash
   mkdir -p instance
   ```

5. **Veritabanını Oluşturun**
   ```bash
   flask db upgrade
   ```

6. **Admin Kullanıcısını Oluşturun**
   İlk çalıştırmada admin kullanıcısı otomatik olarak oluşturulacaktır. Varsayılan kullanıcı adı `admin` ve şifresi `admin1234` olarak ayarlanmıştır. Güvenlik için şifreyi değiştirmeyi unutmayın.

7. **Uygulamayı Çalıştırın**
   ```bash
   python app.py
   ```

8. **Tarayıcıda Açın**
   Uygulama varsayılan olarak `http://127.0.0.1:5000` adresinde çalışacaktır.

## Yapılandırma Değişiklikleri

### 1. **`SECRET_KEY`**
   `app.py` dosyasında `SECRET_KEY` dinamik olarak oluşturulmaktadır. Ekstra güvenlik için bu anahtarı bir ortam değişkeninden alabilirsiniz:
   ```python
   app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', os.urandom(24))
   ```

   Ardından, `.bashrc` veya `.zshrc` dosyanıza aşağıdaki satırı ekleyin:
   ```bash
   export SECRET_KEY="your_secure_key"
   ```

### 2. **Veritabanı Yolu**
   Varsayılan olarak SQLite kullanılır. Başka bir veritabanı kullanmak isterseniz, `app.py` dosyasındaki `SQLALCHEMY_DATABASE_URI` kısmını değiştirin:
   ```python
   app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://username:password@localhost/dbname'
   ```

### 3. **Host ve Port**
   Uygulama şu anda sadece `127.0.0.1` üzerinde çalışmaktadır. Harici bağlantılara izin vermek için `app.run` kısmını şu şekilde değiştirin:
   ```python
   app.run(host='0.0.0.0', port=5000)
   ```

## Gerekli Paketler

Aşağıdaki komutla eksik sistem paketlerini yükleyebilirsiniz:
```bash
sudo apt update
sudo apt install python3 python3-pip python3-venv sqlite3
```

## Geliştirme

- Kod değişikliklerinden sonra uygulamayı yeniden başlatmayı unutmayın.
- Log dosyaları `app.log` içinde tutulmaktadır.

## Sorun Giderme

- **Hata:** `ModuleNotFoundError: No module named '...'`
  - Çözüm: Sanal ortamın aktif olduğundan emin olun (`source venv/bin/activate`).

- **Hata:** `sqlite3.OperationalError: unable to open database file`
  - Çözüm: `instance` klasörünün mevcut olduğundan ve yazma izinlerinin doğru ayarlandığından emin olun.

## Lisans

Bu proje [Ali İlker KOÇAK] tarafından geliştirilmiştir. Tüm hakları saklıdır.
