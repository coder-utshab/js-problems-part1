
//function takes an array as parameter 
//give me the avearage of the odd numbers in the array


/**
 * 1. put odd numbers in the array
 */

function oddAverage(numbers){
    for (const number of numbers) {
        if (number % 2 === 1) {
            // console.log(numbers)
            odds.push(number);

        }
    }
    //odds is the array that contains only the odd number
    console.log(odds)
}

const numbers = [42, 13, 52, 65, 81];
const avg = oddAverage(numbers);
console.log('average of the odd numbers: ',avg);