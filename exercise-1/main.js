'use strict';

// You have 2 arrays of integers. Return the total sum of all those integers.

let arr1 = [5, 6, 2, 3, 10];

let arr2 = [2, 4, 1, 2, 4, 5,];

function addArrays(arr1, arr2) {
   let firstSum = arr1.reduce((sum, number) => sum + number, 0);
   let secondSum = arr2.reduce((sum, number) => sum + number, 0);
   let totalSum = firstSum + secondSum;

   return totalSum;
}

alert(addArrays(arr1, arr2));

