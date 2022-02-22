/*
 * Title: Problem 1
 * Description: codingBat problem
 * Author: Farhan Ahmed Nahid
 * Date: 23/02/22
 *
 */

/* 

problem 1

The parameter weekday is True if it is a weekday, and the parameter vacation is True if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return True if we sleep in.


sleep_in(False, False) → True
sleep_in(True, False) → False
sleep_in(False, True) → True

*/

const sleepIn = (weekday, vacation) => {
  if (weekday === false && vacation === false) {
    return true;
  } else if (vacation === true) {
    return true;
  } else {
    return false;
  }
};

console.log(sleepIn(false, false));
console.log(sleepIn(true, false));
console.log(sleepIn(false, true));
console.log(sleepIn(true, true));
