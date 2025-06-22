/* 
Write a function countDigits(n) that takes an integer n and returns how many digits it contains.
Requirements

    Handles both positive and negative integers.
    Return 1 if n is 0 (since 0 is a single-digit number).

Constraints

    Time Complexity: O(log₁₀(n)) — Each division reduces one digit.
    Space Complexity: O(1) — Only a few variables are used.

Examples

Input: 259
Output: 3

Input: -1035
Output: 4

Input: 0
Output: 1 
*/


const countTheNumberOfDigitsInAnInteger = (num) => {

    if (num === 0) 1;

    num = Math.abs(num)

    let count = 0;

    while (Math.floor(num) > 0) {
        num = num / 10;
        count++
    }

    return count;
}

console.log(countTheNumberOfDigitsInAnInteger(-1035));