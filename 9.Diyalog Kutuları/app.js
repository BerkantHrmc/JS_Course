// ! () JS'de parantezler fonksiyon çağrısı, gruplama ve öncelik belirleme için kullanılır.

//---------alert----------

alert("Merhaba, bu bir alert kutusudur!");
// alert() fonksiyonu, kullanıcıya bilgi vermek için kullanılır.

//---------confirm----------

let confirmResult = confirm("Bu bir onay kutusudur. Devam etmek istiyor musunuz?");
if (confirmResult) {
    console.log("Kullanıcı onayladı.");
}
else {
    console.log("Kullanıcı onaylamadı.");
}
// confirm() fonksiyonu, kullanıcıdan onay almak için kullanılır.   

//---------prompt----------

let userInput = prompt("Lütfen bir değer girin:");
if (userInput !== null) {
    console.log("Kullanıcı girdi: " + userInput);
}
else {
    console.log("Kullanıcı girdi yapmadı.");
}
// prompt() fonksiyonu, kullanıcıdan girdi almak için kullanılır. Eğer kullanıcı iptal ederse, null döner.
// kullanıcıdan alınan değer, string olarak döner. Eğer kullanıcı bir sayı girerse, bu değeri sayıya dönüştürmek için Number() fonksiyonunu kullanabilirsiniz.

