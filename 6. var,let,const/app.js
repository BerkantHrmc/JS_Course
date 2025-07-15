// === var örneği ===
function varExample() {
  if (true) {
    var mesaj = "Bu var ile tanımlandı.";
    console.log("İçeride (var):", mesaj); // Erişilebilir
  }
  console.log("Dışarıda (var):", mesaj); // Hâlâ erişilebilir (function scoped)
}
varExample();

// === let örneği ===
function letExample() {
  if (true) {
    let mesaj = "Bu let ile tanımlandı.";
    console.log("İçeride (let):", mesaj); // Erişilebilir
  }
  // console.log("Dışarıda (let):", mesaj); // ❌ Hata: mesaj tanımsız (block scoped)
}
letExample();

// === const örneği ===
function constExample() {
  if (true) {
    const sabit = "Bu const ile tanımlandı.";
    console.log("İçeride (const):", sabit); // Erişilebilir
  }
  // console.log("Dışarıda (const):", sabit); // ❌ Hata: sabit tanımsız (block scoped)
}
constExample();

// === const ile nesne ===
const kullanıcı = {
  ad: "Ali"
};
kullanıcı.ad = "Veli"; // Değer güncellenebilir (referans sabit, içerik değil)
console.log("const nesne:", kullanıcı);

// === yeniden tanımlama ve atama örnekleri ===
var x = 1;
var x = 2; // ✅ Yeniden tanımlanabilir
console.log("var yeniden:", x);

let y = 3;
// let y = 4; // ❌ Hata: y zaten tanımlı
y = 5; // ✅ Atanabilir
console.log("let yeniden atama:", y);

const z = 10;
// const z = 11; // ❌ Hata: z zaten tanımlı
// z = 12;       // ❌ Hata: const ile atama yapılamaz
console.log("const sabit:", z);
