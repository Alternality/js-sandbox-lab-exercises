'use strict';
const c = console.log.bind(this);

// Exercise #1
// Write a function that takes two numbers and returns the maximum of the two.
function getMaxiumum(num1,num2){
    const maximum = Math.max(num1,num2);
    return maximum;
}
c(getMaxiumum(3,5));
// Exercise #2
// Write a function that determines if a object is on portrait or landscape mode.
function getOrientation(object){
    if (object.width > object.height)
    {
        return "Landscape";
    }
    else (object.width < object.height)
    {
        return "Portrait";
    }
}
c(getOrientation(5,6));
// Exercise #3
// Write a function that will take a number and return the FizzBuzz of that number.
// If the number is divisible by 3 return Fizz
// If the number is divisible by 5 return Buzz
// If the number is divisible by 3 and 5 return FizzBuzz
// If the number is not divisible by 3 or 5 return the number
// If the number is not a number return NaN
function fizzBuzz(number){
    if (number % 3 === 0 && number % 5 === 0){
        return "FizzBuzz";
    }
    else if (number % 3 === 0){
        return "Fizz";
    }
    else if (number % 5 === 0){
        return "Buzz";
    }
    else if (typeof number !== 'number' || !isFinite(number)){
        return "NaN";
    }
    else{
        return number;
    }
}
console.log(fizzBuzz(15));
// Exercise #4
// Write a function called checkSpeed that takes a speed as an argument.
// If the speed is less than 70 return OK
// If the speed is more than 70 add 5 points to the speed for every 1km/h over the limit.
// If the speed is more than 70 and the points are more than 12 return License Suspended
function checkSpeed(speed){
    const speedLimit = 70;
    const kmOverLimit = 5;
    const forSuspension = 12;
    if (speed <= speedLimit) {
        return "OK";
    }
    const exSpeed= speed - speedLimit;
    const points = Math.floor(exSpeed / kmOverLimit);
    
    return points <= forSuspension ? `Points: ${points}` : "License Suspended";
}
c(checkSpeed(90));

// Exercise #5
// Write a function that take an array of numbers as an argument and  determines if a number is ODD or EVEN.
function checkArray(numbers){
    const checkResult=[];
    for (let i=0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number % 2 === 0){
            checkResult.push ("EVEN");
        }
        else checkResult.push("ODD");
    }
    return checkResult;
}
c(checkArray([3,4,5,2]));
// Exercise #6
// Write a function that take an array and returns and counts the truthy values in the array.
// Falsy values are: false, 0, '', null, undefined, NaN
// Truthy values are: true, 1, 'a', [], {}, 'false'
// Example: countTruthy([0, null, '', 'Hello', 1, 2, 3]) => 4
function checkValues(array){
    let count = 0;
    for (let element of array){
        if (element){
            count++;
        }
    }
    return count;
}
c(checkValues([0, null, '', 'Hello', 1, 2, 3]))
// Exercise #7
// Write a function that take an object as an argument and display only the properties with the type string.
// Example: showProperties({name: 'John', age: 30, address: '123 Main St'}) => name, address
function showProperties(object){
    let stringOnly=[]
    for (let key in object){
        if (typeof object[key]=== 'string'){
            stringOnly.push(key);
        }
    }
    return stringOnly;
}
c(showProperties({
    name: 'John',
    age: 30,
    address: '123 Maint St'
}));
// Exercise #8
// Write a function that take an array of numbers as an argument and returns the sum of the multiples of 3 and 5.
// Multiples of 3 => 3, 6, 9
// Multiples of 5 => 5, 10
function sumMultiples(array) {
    let sum = 0;
    for (let number of array) {
      if (number % 3 === 0 || number % 5 === 0) {
        sum += number;
      }
    }
    return sum;
}
c(sumMultiples([3,6,9]))
c(sumMultiples([5,10]))
// Exercise #9
// Write a function called calculateGrade that takes an array of marks as an argument and returns the average of the marks.
// If the average is less than 60 return F
// If the average is less than 70 return D
// If the average is less than 80 return C
// If the average is less than 90 return B
// If the average is less than 100 return A
// Example: calculateGrade([80, 80, 50]) => C
function avrg(numbers){
    let sumAverage=0;
    for(let i =0;i< numbers.length;i++) {
        sumAverage += numbers[i];
    }
    sumAverage=sumAverage/numbers.length;
    return sumAverage;
}
function calculateGrade(marks){
    const average=avrg(marks);
    if (average<60) {
        return 'F';
    }else if (average<70){
        return 'D';
    }else if (average<80){
        return 'C';
    }else if (average<90){
        return 'B';
    }else if (average<100){
        return 'A';
    }
}
console.log(calculateGrade([80,80,50]));
// Exercise #10
// Write a function called showStars that takes a number as an argument and display a triangle of stars.
function showStars(numbers){
    for (let i=1;i==numbers;i++){
        console.log('★')
        return '★';
    }
}
// Exercise #11
// Write a function called showPrimes that takes a number as an argument and display all the prime numbers less than or equal to that number.
// Example: showPrimes(20) => 2, 3, 5, 7, 11, 13, 17, 19
// A prime number is a number that is divisible only by itself and 1.
// Example: 2 is a prime number because it is only divisible by 1 and 2.
// Example: 4 is not a prime number because it is divisible by 1, 2, and 4.
function showPrimes(number){
    function prime(num){
        if (num<=1) return false;
        if (num<=3) return true;
        if (num % 2 === 0 || num % 3 ===0) return false;
        for (let i=5;i*i<=num;i+=6){
            if (num%i===0 || num%(i+2)===0){
                return false;
            }
        }
        return true;
    }
    for (let i=2;i<=number;i++){
        if (prime(i)){
            console.log(i);
        }
    }
}
c(showPrimes([20]));