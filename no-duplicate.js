// const biryanikhor = ['sajib', 'shuvo', 'avijeet', 'utshab','dipto', 'shumon','piyash'];
// const numbers=[1, 5, 61, 87, 7, 5, 81, 68];

// function noDuplicate(array){
//     console.log(array);
// }


// const uniqueArray = noDuplicate(biryanikhor);
// console.log(uniqueArray);






// const biryanikhor = ['sajib', 'shuvo', 'avijeet', 'utshab','dipto', 'shumon','piyash'];
// const numbers=[1, 5, 61, 87, 7, 5, 81, 68];
// function uniqueArray(array){
//     const unique = [];
//     for(const item of array){
//         if(unique.includes(item) === false){
//             unique.push(item);
//         }
//     }
//     return unique;
// }

// const uniqueArray = noDuplicate(biryanikhor);
// console.log(uniqueArray);







const biryanikhor = ['sajib', 'shuvo', 'avijeet', 'utshab','dipto', 'shumon','piyash'];
const numbers = [1, 5, 61, 87, 7, 5, 81, 68];

function uniqueArray(array) {
    const unique = [];
    for (const item of array) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }
    return unique;
}

const result = uniqueArray(numbers);
console.log(result);
