/*
 * @lc app=leetcode id=498 lang=typescript
 *
 * [498] Diagonal Traverse
 */

// @lc code=start
function findDiagonalOrder(mat: number[][]): number[] {
   if (mat.length === 0 || mat[0].length === 0) return [];
   const m = mat.length,
      n = mat[0].length;
   let row = 0,
      col = 0,
      direction = 1;

   const result: number[] = [];

   while (result.length < m * n) {
      // console.log(`${row}, ${col}`);
      result.push(mat[row][col]);

      // move to up right
      if (direction === 1) {
         if (col === n - 1) {
            row++;
            direction = -1;
         } else if (row === 0) {
            col++;
            direction = -1;
         } else {
            row--;
            col++;
         }
      }
      // move to down left
      else if (direction === -1) {
         if (row === m - 1) {
            col++;
            direction = 1;
         } else if (col === 0) {
            row++;
            direction = 1;
         } else {
            row++;
            col--;
         }
      }
   }
   return result;
}
// @lc code=end
