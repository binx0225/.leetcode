/*
 * @lc app=leetcode id=409 lang=typescript
 *
 * [409] Longest Palindrome
 */

// @lc code=start
function longestPalindrome(s: string): number {
   let charCount = new Map<string, number>();
   let length = 0;
   let oddFound = false;

   for (let char of s) {
       charCount.set(char, (charCount.get(char) || 0) + 1);
   }

   for (let [char, count] of charCount) {
       if (count % 2 === 0) {
           length += count;
       } else {
           length += count - 1; // Add the largest even number less than count
           oddFound = true;
       }
   }

   // If an odd character count was found, one of them can be the center of the palindrome
   return oddFound ? length + 1 : length;
};
// @lc code=end

