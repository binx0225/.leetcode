/*
 * @lc app=leetcode id=64 lang=typescript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
function minPathSum(grid: number[][]): number {
   const rows = grid.length;
   const cols = grid[0].length;
   
   const dp = Array.from({length: rows}, () => Array(cols).fill(0));

   for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
         let topDistance = -1;
         let leftDistance = -1;
         if (i - 1 >= 0) topDistance = dp[i - 1][j];
         if (j - 1 >= 0) leftDistance = dp[i][j - 1];


         if (topDistance === -1 && leftDistance === -1) {
            dp[i][j] = grid[i][j]
         } else if (topDistance === -1) {
            dp[i][j] = grid[i][j] + leftDistance;
         } else if (leftDistance === -1) {
            dp[i][j] = grid[i][j] + topDistance;
         } else {
            dp[i][j] = grid[i][j] + Math.min(topDistance, leftDistance);
         }
      }
   }

   return dp[rows-1][cols-1];
};
// @lc code=end

