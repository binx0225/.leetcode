/*
 * @lc app=leetcode id=316 lang=typescript
 *
 * [316] Remove Duplicate Letters
 */

// @lc code=start
function removeDuplicateLetters(s: string): string {
   const lastPos = new Map<string, number>(); // last position of the letter in S
   const inStack = new Set<string>();
   const stack: string[] = [];

   for (let i = 0; i < s.length; i++) {
      lastPos.set(s[i], i);
   }

   for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (!inStack.has(char)) {
         while (
            stack.length > 0 &&
            char < stack[stack.length - 1] &&
            lastPos.get(stack[stack.length - 1])! > i
         ) {
            inStack.delete(stack.pop()!);
         }
         stack.push(char);
         inStack.add(char);
      }
   }

   return stack.join('');
}
// @lc code=end
