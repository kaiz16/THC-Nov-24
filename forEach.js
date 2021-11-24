// Array - Sets of data
let numbers = [1, 2, 3, 4];

let evenNumbers = [];
// Filter even numbers
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}

let oddNumbers = [];
// Filter odd numbers
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers.push(numbers[i]);
  }
}
console.log(evenNumbers);
console.log(oddNumbers);

for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

/* 
Higher order functions are functions that takes in another function(callback) as parameter.
1 - Take an array you want to loop
forEach (Higher order function)
*/
function printNum (num){
    console.log(num);
}
numbers.forEach(printNum)