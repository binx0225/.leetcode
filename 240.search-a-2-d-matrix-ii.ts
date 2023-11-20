/*
 * @lc app=leetcode id=240 lang=typescript
 *
 * [240] Search a 2D Matrix II
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
   const rows = matrix.length;
   const cols = matrix[0].length;
   if (matrix[0][0] > target || matrix[rows - 1][cols - 1] < target) {
      return false;
   }

   let row = rows - 1;
   let col = 0;
   while (row >= 0 && col <= cols - 1) {
      if (matrix[row][col] === target) {
         return true;
      } else if (target > matrix[row][col]) {
         col++;
      } else if (target < matrix[row][col]) {
         row--;
      }
   }

   return false;
}
// @lc code=end
