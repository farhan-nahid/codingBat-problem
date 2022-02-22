/*
 * Title: Problem 3
 * Description: codingBat problem
 * Author: Farhan Ahmed Nahid
 * Date: 23/02/22
 *
 */

/* 

Problem 3

Given two int values, return their sum. Unless the two values are the same, then return double their sum.


sum_double(1, 2) → 3
sum_double(3, 2) → 5
sum_double(2, 2) → 8

*/

const sumDouble = (a, b) => {
  if (a === b) {
    return (a + b) * 2;
  } else {
    return a + b;
  }
};

console.log(sumDouble(1, 2));
console.log(sumDouble(3, 2));
console.log(sumDouble(2, 2));
console.log(sumDouble(-1, 0));
console.log(sumDouble(3, 3));
console.log(sumDouble(0, 0));
console.log(sumDouble(0, 1));
console.log(sumDouble(3, 4));
