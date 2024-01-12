'use strict';
const c=console.log.bind(this);
// Exercise #1
// Create a function called sum that takes multiple arguments and returns the sum of all the arguments.
// sum(1, 2, 3, 4, 5) -> 15
// determine if the argument is an array
// use Array.isArray()
function sum(){
    let result= 0;
    for (let i = 0; i < arguments.length; i++){
        result += arguments[i];
    }
    return result;
}
c(sum(3,6,7,9));
// Exercise #2
// Create a function called circle that takes a radius as an argument.
// The function should return an object that has two properties: area and circumference.
// area -> πr^2
// circumference -> 2πr
function circle(radius){
    if (typeof radius == 'number'){
        const area= 3.14159 * radius * radius;
        const circumference = 2 * 3.14159 * radius;
        return {area,circumference};
    }
    else{
        return 'invalid input';
    }
}
c(circle(6));
// Exercise #3
// countOccurrences -> takes an array and search element as arguments.
// The function should return the number of occurrences of the given element in the array.
// countOccurrences([1, 2, 3, 4, 1], 1) -> 2
// if the element is not in the array, return 0
// if the array is empty, return 0
// if the array is not an array, return 0
// use try and catch to handle errors
function countOccurrences(arr,searchElement){
    if (!Array.isArray(arr)){
        return 0;
    }
    let occurrences = 0;
    for (let i= 0; i < arr.length; i++){
        occurrences += arr[i] === searchElement ? 1 : 0;

    }
    return occurrences;
}
c(countOccurrences([1,2,3,4,1],1));
c(countOccurrences([0]));
c(countOccurrences([]));
c(countOccurrences('Hi',2));