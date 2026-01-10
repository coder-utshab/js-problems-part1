const numbers = [300, 100, 700, 1200];

const products = [
    { const: 'shampoo', price: 300},
    { const: 'shirt', price: 6000},
    { const: 'pant', price: 1200},
    { const: 'accessories', price: 400},
]

function getShoppingTotal (products){
let total = 0;
for(const product of products){
    total = total + product.price;
}
return total;
}

const total = getShoppingTotal(products);
console.log('total ajke coshting: ', total);