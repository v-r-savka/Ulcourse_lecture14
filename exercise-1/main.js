'use strict';


let arr1 = [5, 6, 2, 3, 10];

let arr2 = [2, 4, 1, 2, 4,];

function addArrays(arr1, arr2) {
   let sum = arr1.concat(arr2).reduce((sum, number) => sum + number, 0);
   return sum;

   // let firstSum = arr1.reduce((sum, number) => sum + number, 0);
   // let secondSum = arr2.reduce((sum, number) => sum + number, 0);
   // let totalSum = firstSum + secondSum;

   // return totalSum;
};

alert(addArrays(arr1, arr2));

