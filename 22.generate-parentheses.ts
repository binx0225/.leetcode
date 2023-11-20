/*
 * @lc app=leetcode id=22 lang=typescript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
   let output = "";
   let left = n;
   let right = n;
   const result: string[] = [];

   function recursive(output: string, left: number, right: number) {
      if (left === 0 && right === 0) {
         result.push(output);
      } else if (left === 0) {
         recursive(output + ")", left, right - 1);
      } else if (left === right) {
         recursive(output + "(", left - 1, right);
      } else {
         recursive(output + "(", left - 1, right);
         recursive(output + ")", left, right - 1);
      }
   }

   recursive(output, left, right);

   return result;
}
// @lc code=end
