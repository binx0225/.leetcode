/*
 * @lc app=leetcode id=318 lang=typescript
 *
 * [318] Maximum Product of Word Lengths
 */

// @lc code=start
function maxProduct(words: string[]): number {
   const n: number = words.length;
   const masks: number[] = new Array(n).fill(0);

   // Precompute the bitmask for each word
   for (let i = 0; i < n; i++) {
       for (let char of words[i]) {
           masks[i] |= 1 << (char.charCodeAt(0) - 'a'.charCodeAt(0));
       }
   }

   let maxProd: number = 0;

   // Check each pair of words
   for (let i = 0; i < n; i++) {
       for (let j = i + 1; j < n; j++) {
           // If they have no common letters, update maxProd
           if ((masks[i] & masks[j]) === 0) {
               maxProd = Math.max(maxProd, words[i].length * words[j].length);
           }
       }
   }

   return maxProd;
};
// @lc code=end

