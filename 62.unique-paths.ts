/*
 * @lc app=leetcode id=62 lang=typescript
 *
 * [62] Unique Paths
 */
// @lc code=start
function uniquePaths(m: number, n: number): number {
   // 1. brute force
   // if (m === 0 || n === 0) return 0;
   // if (m === 1 || n === 1) return 1;
   // let result = 0;

   // result = uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
   // return result;

   // 2. dynamic programming
   let dp = Array.from({length: m + 1}, () => new Array(n+1).fill(0));
   // base case
   dp[1][1] = 1;

   for (let i = 0; i < m + 1; i++) {
      for (let j = 0; j < n + 1; j++) {
         if (i + 1 < m + 1) dp[i + 1][j] += dp[i][j];
         if (j + 1 < n + 1) dp[i][j + 1] += dp[i][j];
      }
   }

   return dp[m][n];
}
// @lc code=end
