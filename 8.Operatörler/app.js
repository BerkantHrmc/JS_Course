// ----------- ATAMA OPERATORLERİ -----------

/*
=   : Değer atama operatörü
==  : Eşitlik kontrolü (değer eşitliği)
=== : Eşitlik kontrolü (değer ve tip eşitliği)
+=  : Toplayarak atama (x += y → x = x + y)
-=  : Çıkararak atama (x -= y → x = x - y)
*=  : Çarparak atama (x *= y → x = x * y)
/=  : Bölerken atama (x /= y → x = x / y)
%=  : Mod alarak atama (x %= y → x = x % y)
**= : Üs alarak atama (x **= y → x = x ** y)
*/

//-----------MANTIKSAL ATAMA OPERATORLERİ-----------
// ||  : Mantıksal VEYA (logical OR)
// &&  : Mantıksal VE (logical AND)
// !   : Mantıksal DEĞİL (logical NOT)

//-----------KARŞILAŞTIRMA OPERATORLERİ-----------
// !=  : Eşit değil (not equal)
// !== : Eşit değil (değer ve tip eşitliği)
// >   : Büyüktür (greater than)
// <   : Küçüktür (less than)
// >=  : Büyük veya eşit (greater than or equal)
// <=  : Küçük veya eşit (less than or equal)


// ----------- ATAMA OPERATORLERİ ÖRNEKLERİ -----------

let x;

//---------------------------------------- = (Değer atama)
x = 10;
console.log("= : ", x); // 10



//--------------------------------------- += (Toplayarak atama)
x += 5; // x = x + 5
console.log("+= : ", x); // 15

//--------------------------------------- -= (Çıkarak atama)
x -= 3; // x = x - 3
console.log("-= : ", x); // 12

//--------------------------------------- *= (Çarparak atama)
x *= 2; // x = x * 2
console.log("*= : ", x); // 24

//--------------------------------------- /= (Bölerek atama)
x /= 4; // x = x / 4
console.log("/= : ", x); // 6

//--------------------------------------- %= (Mod alarak atama)
x %= 4; // x = x % 4
console.log("%= : ", x); // 2

//--------------------------------------- **= (Üs alarak atama)
x **= 3; // x = x ** 3
console.log("**= : ", x); // 8


// ----------- MANTIKSAL OPERATORLERİ ÖRNEKLERİ -----------

let a = true;
let b = false;          

//--------------------------------------- || (Mantıksal VEYA)
let orResult = a || b; // true
console.log("|| : ", orResult); // true

//--------------------------------------- && (Mantıksal VE)
let andResult = a && b; // false
console.log("&& : ", andResult); // false

//--------------------------------------- ! (Mantıksal DEĞİL)
let notResult = !a; // false
console.log("! : ", notResult); // false


// ----------- KARŞILAŞTIRMA OPERATORLERİ ÖRNEKLERİ -----------

let num1 = 5;
let num2 = 10;      

//--------------------------------------- == (Eşitlik kontrolü)
let isEqual = num1 == num2; // false
console.log("== : ", isEqual); // false     

//--------------------------------------- === (Değer ve tip eşitliği)
let isStrictEqual = num1 === 5; // true
console.log("=== : ", isStrictEqual); // true

//--------------------------------------- != (Eşit değil)
let isNotEqual = num1 != num2; // true
console.log("!= : ", isNotEqual); // true

//--------------------------------------- !== (Değer ve tip eşit değil)
let isStrictNotEqual = num1 !== "5"; // true
console.log("!== : ", isStrictNotEqual); // true

//--------------------------------------- > (Büyüktür)
let isGreater = num1 > num2; // false
console.log("> : ", isGreater); // false

//--------------------------------------- < (Küçüktür)
let isLess = num1 < num2; // true
console.log("< : ", isLess); // true

//--------------------------------------- >= (Büyük veya eşit)
let isGreaterOrEqual = num1 >= 5; // true
console.log(">= : ", isGreaterOrEqual); // true

//--------------------------------------- <= (Küçük veya eşit)
let isLessOrEqual = num1 <= 10; // true
console.log("<= : ", isLessOrEqual); // true


