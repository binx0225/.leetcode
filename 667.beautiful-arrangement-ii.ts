/*
 * @lc app=leetcode id=667 lang=typescript
 *
 * [667] Beautiful Arrangement II
 */

// @lc code=start
function constructArray(n: number, k: number): number[] {
   let answer: number[] = [];
   let start = 1,
      end = n;

   for (let i = 0; i < k; i++) {
      // Alternate between start and end
      if (i % 2 === 0) {
         answer.push(start++);
      } else {
         answer.push(end--);
      }
   }

   // Complete the sequence without introducing new differences
   if (k % 2 === 0) {
      // If k is even, continue with decrementing end
      for (let i = end; i >= start; i--) {
         answer.push(i);
      }
   } else {
      // If k is odd, continue with incrementing start
      for (let i = start; i <= end; i++) {
         answer.push(i);
      }
   }

   return answer;
}
// @lc code=end
