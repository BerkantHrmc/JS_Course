# JavaScript Kodlarının `<body>` Etiketinin Sonuna Yazılmasının Sebebi

## 📌 Genel Açıklama

Web geliştirmede, JavaScript dosyalarının `<body>` etiketinin kapanışından hemen önce (`</body>`) yerleştirilmesi, sayfanın performansı ve kullanıcı deneyimi açısından önemlidir.

---

## ✅ Ana Sebep

- **Sayfanın HTML İçeriğinin Önce Yüklenmesi:**  
  Tarayıcı bir HTML dosyasını yukarıdan aşağıya okur. Eğer `<head>` bölümünde `<script>` etiketi bulunursa, tarayıcı JavaScript dosyasını yükleyene kadar HTML içeriğinin geri kalanını duraklatır.
  
  Bu, sayfanın içeriğinin geç görünmesine ve "beyaz ekran" hissine sebep olabilir.

---

## ⚙️ Çalışma Mantığı

- **Önce İçerik, Sonra Davranış:**  
  Önce HTML ve CSS yüklenir, ardından JavaScript yüklenerek etkileşimler devreye girer.
- **Kullanıcı Gecikmesini Azaltır:**  
  Kullanıcı sayfanın içeriğini hemen görebilir. JavaScript sonradan yüklenip çalıştırılırken kullanıcı sayfayı kullanmaya başlayabilir.

---

## 🚫 Ne Olur?

- `<head>` içinde `<script>` kullanıldığında:
  - HTML işlenmesi bloklanır.
  - Büyük JS dosyaları sayfa yüklenmesini yavaşlatır.

- `<body>` sonunda `<script>` kullanıldığında:
  - HTML tamamen yüklenir.
  - JavaScript dosyası sayfa etkileşimlerini ekler.
  - Hızlı ve akıcı bir kullanıcı deneyimi sağlanır.

---

## 🎯 Alternatif Yöntemler

Modern HTML’de `<script>` etiketi için:
```html
<script src="app.js" defer></script>
