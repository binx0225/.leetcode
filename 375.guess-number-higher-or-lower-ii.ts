/*
 * @lc app=leetcode id=375 lang=typescript
 *
 * [375] Guess Number Higher or Lower II
 */

// @lc code=start
function getMoneyAmount(n: number): number {
   const dp: number[] = Array(n + 1).fill(0);
   dp[1] = 0;
   dp[2] = 1;

   for (let i = 3; i <= n; i++) {
      dp[i] = dp[i - 1] + i - 1;
   }

   return dp[n];
}
// @lc code=end
