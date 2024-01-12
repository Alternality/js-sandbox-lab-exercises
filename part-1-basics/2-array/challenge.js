'use strict';
const c = console.log.bind(this);

// Write a function called sumArray that takes an array of numbers as an argument and returns the sum of all the numbers in the array.
function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  return sum;
}
// Write a function called filterLongStrings that takes an array of strings as an argument and returns a new array with only the strings that have a length greater than 3.
function filterLongStrings(strings) {
  let filteredStrings = [];
  for (let i = 0; i < strings.length; i++){
    if (strings[i].length > 3){
      filteredStrings.push(strings[i]);
    }
  }
  return filteredStrings;
}
// <---------- Do Not Touch the Code Beyond this line ----------------------------->

console.log(sumArray([1, 2, 3, 4, 5])); // Expected output: 15
console.log(sumArray([10, -5, 7, 3])); // Expected output: 15

console.log(filterLongStrings(['cat', 'dog', 'elephant', 'bird'])); // Expected output: ["elephant", "bird"]
console.log(filterLongStrings(['apple', 'banana', 'pear'])); // Expected output: ["apple", "banana"]
