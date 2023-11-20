/*
 * @lc app=leetcode id=486 lang=typescript
 *
 * [486] Predict the Winner
 */

// @lc code=start
function predictTheWinner(nums: number[]): boolean {
   const n: number = nums.length;
   const dp: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

   for (let i = 0; i < n; i++) {
      dp[i][i] = nums[i];
   }

   for (let len = 2; len <= n; len++) {
      for (let i = 0; i <= n - len; i++) {
         let j = i + len - 1;
         dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
      }
   }

   return dp[0][n - 1] >= 0;
}
// @lc code=end
