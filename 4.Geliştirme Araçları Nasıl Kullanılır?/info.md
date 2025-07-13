
# Chrome Geliştirici Araçları (DevTools) Paneli Açıklamaları

Tarayıcıda web sayfalarını denetlemek, düzenlemek ve hata ayıklamak için kullanılır. Sağ tıklayıp **"İncele"** diyerek açabilirsiniz.

## 🔹 1. **Elements**
- HTML ve CSS DOM yapısını canlı olarak görüp düzenlemeye yarar.
- Stil kurallarını sağ taraftan görebilir ve değiştirebilirsin.
- Sınıf ve etiket ekleyebilir, stilleri geçici olarak test edebilirsin.

## 🔹 2. **Console**
- JavaScript kodları yazabilir ve hata mesajlarını görebilirsin.
- `console.log()` çıktıları burada görünür.
- Canlı olarak JS komutları test edilebilir.
- Hatalar (error, warning) burada gösterilir.

## 🔹 3. **Sources**
- Sayfanın JS, CSS gibi tüm kaynak dosyalarını görürsün.
- Dosyalar üzerinde breakpoint koyarak adım adım çalışmasını izleyebilirsin.
- Kaynak haritalar (source map) destekliyorsa orijinal dosyaları da görebilirsin.

## 🔹 4. **Network**
- Sayfanın yüklediği tüm kaynakları (resimler, API çağrıları vs.) gösterir.
- Her isteğin ne kadar sürede geldiğini, durum kodlarını, yanıtları inceleyebilirsin.
- Yavaş internet simülasyonu yapılabilir (örneğin "Slow 3G").

## 🔹 5. **Performance**
- Sayfa performansını ölçmek için kullanılır.
- Animasyonlar, frame süreleri ve tıkanıklıklar analiz edilebilir.

## 🔹 6. **Memory**
- Bellek kullanımı ve bellek sızıntıları (memory leak) incelenir.
- Heap snapshot alarak kullanılmayan nesneleri tespit edebilirsin.

## 🔹 7. **Application**
- Web Storage (localStorage, sessionStorage), IndexedDB, cookie verileri buradan incelenir.
- Service Worker ve manifest dosyası da buradan kontrol edilir.

## 🔹 8. **Security**
- HTTPS sertifikası, mixed content ve güvenlik açıkları denetlenebilir.
- SSL/TLS yapılandırmaları burada görünür.

## 🔹 9. **Lighthouse**
- Sayfayı performans, erişilebilirlik ve SEO açısından analiz eder.
- Skorlar verir ve öneriler sunar.

## 🔹 10. **Recorder**
- Kullanıcı etkileşimlerini kaydedip performans analizine dönüştürür.

---

## 🔍 Debugger Nedir?

Debugger, JavaScript kodlarının adım adım çalışmasını incelemek için kullanılır. Özellikle `Sources` sekmesi altında:

- **Breakpoint**: Belirli bir satırda kodun durmasını sağlar.
- **Step Over (F10)**: Fonksiyonun içine girmeden sonraki adıma geçer.
- **Step Into (F11)**: Fonksiyon içine girer.
- **Watch**: Değişkenleri izlemeye alabilirsin.
- **Call Stack**: Hangi fonksiyonlar çağrılmış, zinciri gösterir.

---

🧠 Not: Tüm bu araçlar, canlı sitelerde test yapmak, hataları tespit etmek ve sayfanın nasıl çalıştığını anlamak için çok güçlü bir ortam sunar.
