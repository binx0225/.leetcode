/*
 * @lc app=leetcode id=63 lang=typescript
 *
 * [63] Unique Paths II
 */

// @lc code=start
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
   const rows = obstacleGrid.length;
   if (rows === 0) return 0;
   const cols = obstacleGrid[0].length;
   if (cols === 0) return 0;

   let dp = Array.from({ length: rows }, () => new Array(cols).fill(0));

   for (let i = 0; i < rows; i++) {
      if (obstacleGrid[i][0] === 1) break;
      dp[i][0] = 1;
   }

   for (let j = 0; j < cols; j++) {
      if (obstacleGrid[0][j] === 1) break;
      dp[0][j] = 1;
   }

   for (let i = 1; i < rows; i++) {
      for (let j = 1; j < cols; j++) {
         if (obstacleGrid[i][j] === 0) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
         }
      }
   }

   return dp[rows-1][cols-1];
}
// @lc code=end
