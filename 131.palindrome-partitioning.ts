/*
 * @lc app=leetcode id=131 lang=typescript
 *
 * [131] Palindrome Partitioning
 */

// @lc code=start
function partition(s: string): string[][] {
   const result: string[][] = [];
   const palindromes: string[] = [];

   function backtack(i) {
      if (i >= s.length) {
         result.push([...palindromes]);
         return;
      }

      for (let j = i; j < s.length; j++) {
         if (isPalindrome(s, i, j) === true) {
            palindromes.push(s.slice(i, j + 1));
            backtack(j + 1);
            palindromes.pop();
         }
      }
   }

   backtack(0);

   return result;
}

function isPalindrome(s: string, l: number, r: number): boolean {
   while (l < r) {
      if (s[l] !== s[r]) {
         return false;
      }
      l++;
      r--;
   }

   return true;
}
// @lc code=end
