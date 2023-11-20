/*
 * @lc app=leetcode id=378 lang=typescript
 *
 * [378] Kth Smallest Element in a Sorted Matrix
 */

// @lc code=start
function kthSmallest(matrix: number[][], k: number): number {
   const len = matrix.length;
   let low = matrix[0][0];
   let high = matrix[len - 1][len - 1];

   while (low < high) {
      let mid = Math.floor((low + high) / 2);
      const count = countLessOrEqualTo(mid);
      if (count < k) {
         low = mid + 1;
      } else {
         high = mid;
      }
   }

   return low;

   function countLessOrEqualTo(num: number) {
      let count = 0;
      let j = len - 1;
      for (let i = 0; i < len; i++) {
         for (j; j >= 0; j--) {
            if (matrix[i][j] <= num) {
               count += j + 1;
               break;
            }
         }
      }

      return count;
   }
}
// @lc code=end
