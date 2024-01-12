'use strict';
// Write a function printEvenNumbers that takes a number as an argument and prints all the even numbers between 0 and that number (inclusive).
function printEvenNumbers(number) {
    let evenNumbers = [];
    
    for (let i = 0; i <= number; i++) {
      if (i % 2 === 0) {
        evenNumbers.push(i);
      }
    }
    console.log(evenNumbers);
}
// <---------- Do Not Touch the Code Beyond this line ----------------------------->
printEvenNumbers(10); // Expected output: 0 2 4 6 8 10
printEvenNumbers(5); // Expected output: 0 2 4
