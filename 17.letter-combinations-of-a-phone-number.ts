/*
 * @lc app=leetcode id=17 lang=typescript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
   if (digits.length === 0) return [];

   const phoneMap: { [key: string]: string } = {
      "2": "abc",
      "3": "def",
      "4": "ghi",
      "5": "jkl",
      "6": "mno",
      "7": "pqrs",
      "8": "tuv",
      "9": "wxyz",
   };
   const result: string[] = [];

   function backtrack(index: number, path: string): void {
      if (index >= digits.length) {
         result.push(path);
         return;
      }

      const digit = digits[index];
      const letters = phoneMap[digit];
      for (let i = 0; i < letters.length; i++) {
         backtrack(index + 1, path + letters[i]);
      }
   }

   backtrack(0, "");

   return result;
}
// @lc code=end
