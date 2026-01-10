const phones = [
    { name: 'Samsung', prices: 2000, camera: '12mp', color: 'black'},
    { name: 'Samsung', prices: 2000, camera: '12mp', color: 'black'},
    { name: 'Samsung', prices: 2000, camera: '12mp', color: 'black'},
    { name: 'Samsung', prices: 2000, camera: '12mp', color: 'black'},
    { name: 'Samsung', prices: 2000, camera: '12mp', color: 'black'},
    { name: 'Samsung', prices: 2000, camera: '12mp', color: 'black'},
]

function getCheapestPhone(phones){
    let min = phones[0];
    for(const phone of phones){
        if(phone.price < min.price){
            min = phone
        }
    }
    return min;
}

const cheap = getCheapestPhone(phones);
console.log('Cheapest phone is: ', cheap);