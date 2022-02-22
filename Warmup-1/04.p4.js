/*
 * Title: Problem 4
 * Description: codingBat problem
 * Author: Farhan Ahmed Nahid
 * Date: 23/02/22
 *
 */

/* 

problem 4

Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.


diff21(19) → 2
diff21(10) → 11
diff21(21) → 0

*/

const diff21 = (n) => {
  if (n <= 21) {
    return 21 - n;
  } else {
    return (n - 21) * 2;
  }
};

console.log(diff21(19));
console.log(diff21(10));
console.log(diff21(21));
