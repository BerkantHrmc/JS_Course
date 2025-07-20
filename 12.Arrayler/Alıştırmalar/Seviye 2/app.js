//---Aşşağıdaki alışveriş sepetindeki elemanları ekleyin, silin , düzenleyin.
//const  shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
/*
Eğer alışveriş sepetine zaten 'Meat' eklenmemişse en başa ekleyin.

Eğer alışveriş sepetine zaten 'Sugar' eklenmemişse en sona ekleyin.

Eğer bala alerjiniz varsa 'Honey' elemanını diziden silin.

'Tea' elemanını 'Green Tea' olarak güncelleyin.  */

const  shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey',"Meat"];

if (shoppingCart.includes("Meat")){
    let indexMeat = shoppingCart.indexOf("Meat");
    shoppingCart.splice(indexMeat,1);
    shoppingCart.unshift("Meat");
}
if (shoppingCart.includes("Sugar")){
    let indexMeat = shoppingCart.indexOf("Sugar");
    shoppingCart.splice(indexMeat,1);
    shoppingCart.unshift("Sugar");
}

console.log(shoppingCart);

//-------------------------------------------------------------------------

