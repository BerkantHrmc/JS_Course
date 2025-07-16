
# 💬 JavaScript Diyalog Kutuları

JavaScript, kullanıcılarla etkileşim kurmak için üç temel diyalog kutusu sunar:

---

## 🔔 `alert()`

Kullanıcıya bilgi vermek için kullanılır. Tamam (OK) butonu bulunur.

```javascript
alert("Bu bir uyarı mesajıdır!");
```

📌 **Not:** Kullanıcı yalnızca tamam butonuna basarak devam edebilir. Girdi alınamaz.

---

## 📝 `prompt()`

Kullanıcıdan veri almak için kullanılır. Metin kutusu ve iki buton (Tamam / İptal) içerir.

```javascript
let isim = prompt("Adınızı girin:");
console.log("Kullanıcı adı:", isim);
```

📌 **Not:** Kullanıcı giriş yapmazsa `null` döner.

---

## ❓ `confirm()`

Kullanıcıdan onay almak için kullanılır. Evet/Hayır (Tamam/İptal) butonları bulunur.

```javascript
let onay = confirm("Devam etmek istiyor musunuz?");
console.log("Kullanıcının cevabı:", onay);
```

📌 **Not:** `Tamam` → `true`, `İptal` → `false` döner.

---
