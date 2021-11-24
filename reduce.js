/* 
Step 1 - Take an array that you want to reduce on
Step 2 - Add a condition
*/

let numbers = [1, 2, 3, 4, 5];


let total = numbers.reduce((previous, next) =>{ 
    return previous + next;
}, 0)

console.log(total);