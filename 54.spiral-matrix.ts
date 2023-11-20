/*
 * @lc app=leetcode id=54 lang=typescript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
   const result: number[] = [];
   let rows = matrix.length;
   let cols = matrix[0].length;

   let topRow = 0;
   let rightCol = cols - 1;
   let bottomRow = rows - 1;
   let leftCol = 0;

   while (topRow <= bottomRow && leftCol <= rightCol) {
      // top row
      for (let j = leftCol; j <= rightCol; j++) {
         result.push(matrix[topRow][j]);
         // console.log(`top ${topRow}, ${j}`);
      }
      topRow++;

      // right col
      for (let i = topRow; i <= bottomRow; i++) {
         result.push(matrix[i][rightCol]);
         // console.log(`right ${i}, ${rightCol}`);
      }
      rightCol--;

      if (topRow <= bottomRow) {
         // bottom row
         for (let j = rightCol; j >= leftCol; j--) {
            result.push(matrix[bottomRow][j]);
            // console.log(`bottom ${bottomRow}, ${j}`);
         }
         bottomRow--;
      }

      if (leftCol <= rightCol) {
         // left col
         for (let i = bottomRow; i >= topRow; i--) {
            result.push(matrix[i][leftCol]);
            // console.log(`left ${i}, ${leftCol}`);
         }
         leftCol++;
      }
   }

   return result;
}
// @lc code=end
