/*
 * @lc app=leetcode id=377 lang=typescript
 *
 * [377] Combination Sum IV
 */

// @lc code=start
function combinationSum4(nums: number[], target: number): number {

   let dp = new Array(target + 1).fill(0);
   dp[0] = 1;

   for (let i = 1; i <= target; i++) {
       for (let num of nums) {
           if (i >= num) {
               dp[i] += dp[i - num];
           }
       }
   }

   return dp[target];

   // let count = 0;

   // function backtrack(total: number) {
   //    if (total === target) {
   //       count++;
   //       return;
   //    }

   //    if (total > target) return;

   //    for (let num of nums) {
   //       backtrack(num + total);
   //    }
   // }

   // backtrack(0);

   // return count;
}
// @lc code=end
