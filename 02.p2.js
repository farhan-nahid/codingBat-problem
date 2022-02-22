/*
 * Title: Problem 2
 * Description: codingBat problem
 * Author: Farhan Ahmed Nahid
 * Date: 23/02/22
 *
 */

/* 

 Problem 2

We have two monkeys, a and b, and the parameters a_smile and b_smile indicate if each is smiling. We are in trouble if they are both smiling or if neither of them is smiling. Return True if we are in trouble.


monkey_trouble(True, True) → True
monkey_trouble(False, False) → True
monkey_trouble(True, False) → False

*/

const monkeyTrouble = (aSmile, bSmile) => {
  if ((aSmile === true && bSmile === true) || (aSmile === false && bSmile === false)) {
    return true;
  } else {
    return false;
  }
};

console.log(monkeyTrouble(true, true));
console.log(monkeyTrouble(false, false));
console.log(monkeyTrouble(true, false));
console.log(monkeyTrouble(false, true));
