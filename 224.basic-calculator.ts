/*
 * @lc app=leetcode id=224 lang=typescript
 *
 * [224] Basic Calculator
 */

// @lc code=start
/*
1. Initialize Variables:

A stack to keep track of numbers and operators.
A variable for the current number.
A variable for the current sign (1 for positive, -1 for negative).
2. Iterate Through the String:

If you find a digit, update the current number.
If you find an operator (+ or -), push the current number to the stack
 (considering the current sign), reset the current number, and update 
 the current sign.
If you find an opening parenthesis (, push the current result and sign
    to the stack, then reset them.
If you find a closing parenthesis ), pop the top of the stack 
(which is the sign before the parenthesis) and add it to the current 
result, then pop again to add the previous result.
3. Calculate the Result:

After the string is fully processed, you will have the final result.



*/
function calculate(s: string): number {
   let stack: number[] = [];
   let currentNumber = 0;
   let result = 0;
   let sign = 1;  // 1 for positive, -1 for negative

   for (let i = 0; i < s.length; i++) {
       let char = s[i];

       if (!isNaN(parseInt(char))) {
           currentNumber = (currentNumber * 10) + parseInt(char);
       } else if (char === '+') {
           result += sign * currentNumber;
           currentNumber = 0;
           sign = 1;
       } else if (char === '-') {
           result += sign * currentNumber;
           currentNumber = 0;
           sign = -1;
       } else if (char === '(') {
           stack.push(result);
           stack.push(sign);
           result = 0;
           sign = 1;
       } else if (char === ')') {
           result += sign * currentNumber;
           result *= stack.pop()!;
           result += stack.pop()!;
           currentNumber = 0;
       }
   }

   return result + (sign * currentNumber);
};
// @lc code=end

