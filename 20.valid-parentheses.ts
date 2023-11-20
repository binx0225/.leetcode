/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
   const stack: string[] = [];
   const mappings = new Map<string, string>([
       [')', '('],
       ['}', '{'],
       [']', '[']
   ]);

   for (let char of s) {
       if (mappings.has(char)) {
           const topElement = stack.length === 0 ? '#' : stack.pop();
           if (topElement !== mappings.get(char)) {
               return false;
           }
       } else {
           stack.push(char);
       }
   }

   return stack.length === 0;
};
// @lc code=end

