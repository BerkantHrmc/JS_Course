let age = prompt("Lütfen yaşınızı girin:");
let value = prompt("Lütfen bütçenizi girin:");

let numAge = Number(age);
let numValue = Number(value);


if (numAge >= 18 && numValue >= 500000) {
    alert("Tebrikler, araba alabilirsiniz!");
}
else if (numAge < 18) {
    alert("Üzgünüz, yaşınız 18'den küçük olduğu için araba alamazsınız.");
}
else if (numValue < 500000) {
    alert("Üzgünüz, bütçeniz 500.000 TL'den az olduğu için araba alamazsınız.");
}

