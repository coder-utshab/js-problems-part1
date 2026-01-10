const prices = [20000, 50000, 42000, 5200, 30000, 35000, 12500];

function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
          min = num;
        }     
    }
    return min;
}

const cheap = getMin(prices);
console.log('cheapest one is: ', cheap);