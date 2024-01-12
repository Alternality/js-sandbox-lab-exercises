'use strict';
const c = console.log.bind(this);

// Exercise #1
//  Create a function called arrayFromRange() that takes two arguments, min and max, and returns an array of numbers from min to max.
function arrayFromRange(min,max){
    let result = [];
    for (let i = min; i <=max; i++){
        result.push(i);
    }
    return result;
}
c(arrayFromRange(2,7));
// Exercise #2
// Create a function called includes() that takes two arguments, array and searchElement, and returns true if the searchElement is in the array, otherwise returns false.
function includes(array,searchElement){
    for (let element of array){
        if (element === searchElement){
            return true;
        }
    }
    return false;
}
c(includes([3,4,5,6],4));
// Exercise #3
// Create a function called except() that takes two arguments, array and excluded, and returns an array with all the elements of the array except the excluded elements.
function except(array,excluded){
    let result = [];
    for (let element of array){
        if (!excluded.includes(element)){
            result.push(element);
        }
    }
    return result;
}
c(except([7,8,9,10],[8,9]));
// Exercise #4
// Create a function called move() that takes three arguments, array, index, offset, and returns the array with the element at the index moved to the offset.
function move(array,index,offset){
    const element = array.splice(index, 1)[0];
    array.splice(index + offset, 0, element);
    return array;
}
c(move([7,8,9,10],1,2));
// Exercise #5
// Create a function called countOccurrences() that takes two arguments, array and searchElement, and returns the number of times the searchElement appears in the array.
function countOccurrences(array,searchElement){
    let count = 0;
    for (let element of array) {
        if (element === searchElement){
            count++;
        }
    }
    return count;
}
c(countOccurrences([4,5,6,7,6],6));
// Exercise #6
// Create a function called getMax() that takes an array of numbers and returns the maximum number in the array.
function getMax(array) {
    return Math.max(...array);
}
c(getMax([3,5,4,1]));
// Exercise #7
// Create a function called movies() that takes an array of movies and returns an array of movies that have a rating of 5.0.
function movies(moviesArray){
    return moviesArray.filter(movie => movie.rating === 5.0)
}
c(movies([{title:'Spiderman',rating:3.0,},{title:'Venom',rating:5.0}]));