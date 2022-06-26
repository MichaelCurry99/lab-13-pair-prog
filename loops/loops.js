"use strict";

// ATTENTION: Please create functions for each exercise and test them with your function calls.


// 1) Get the sum of two arrays…actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.

let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351

for(i=0;i<arr.length;i++){
    console.log(arr_1[i]);
    console.log(arr_2[i]);
}

// Example output: 
// 276 + 351 = 627


// // 2) Using a for loop print all even numbers up to and including n. Don’t include 0.

// let n1 = 22; 
// // Example output: 
// // 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line
 
for(i=0; i<n1.length; i++){
console.log(n1);
}
// }


// // 3) Using a for loop output the elements in reverse order

let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// // Example output: 
// // true 3.5  be  false cannot  true 9 what 43 OR each item on a new line
for(i=0; i <arr.length;i++){

    console.log(arr[i]);
}



// // 4) Given two arrays of integers. Add up each element in the same position and
// // create a new array containing the sum of each pair. Assume both arrays are of the same length.

 
let arr_3   = [4, 6, 7];
let arr_4    = [8, 1, 9];
// // Example output: 
// // [12, 7, 16]

for(i=0; i < arr_3.length;i++) {
    console.log(arr_3[i] + arr_4[i]);
}



// // 5) Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.

// // Sample numbers : 0, -1, 4
// // Output : 4, 0, -1

let array1 = 0;
let array2 = -1;
let array3 = 4;

// for(i=0; i < array1.length; i++){

// }

if (array1 > array2){
    alert(array1 + "," + array2 + ","+ array3)
    console.log(array1, array2, array3)
}
else if (array3 > array){
    console.log(array3,array1,array2)
}
// // 6) Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result. Go to the editor
// // Sample numbers : -5, -2, -6, 0, -1
// // Output

let number1 = -5;
let number2 = -2;
let number3 = -6;
let number4 = 0;
let number5 = -1;
if(number1 > number3){
    alert(number1 + "is the largest of" +number3);
}
else if(number3 < number4){
    alert(number4 + "is the largest of" +number1);
}