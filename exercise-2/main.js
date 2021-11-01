'use strict';

// Write a function that accepts an array of ages 
// and returns an array of ages greater than 18.

let ages = [6, 48, 3, 32, 23, 18];

function filterAges(arr) {
   let someAges = arr.filter(number => number >= 18);
   return someAges;
}

alert(filterAges(ages));