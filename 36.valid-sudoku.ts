/*
 * @lc app=leetcode id=36 lang=typescript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
function isValidSudoku(board: string[][]): boolean {
   const rowSet = new Set<string>();
   const colSet = new Set<string>();
   const boxSet = new Set<string>();
   const rows = board.length;
   const cols = board[0].length;

   for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
         const value = board[i][j];
         if (value === '.') continue;

         const rowKey = `${i},${value}`;
         if (rowSet.has(rowKey)) {
            return false;
         }

         const colKey = `${j},${value}`;
         if (colSet.has(colKey)) {
            return false;
         }

         const boxIndex = getBoxIndex(i, j);

         const boxKey = `${boxIndex},${value}`;

         if (boxSet.has(boxKey)) {
            return false;
         }

         rowSet.add(rowKey);
         colSet.add(colKey);
         boxSet.add(boxKey);
      }
   }

   return true;

   function getBoxIndex(r: number, c: number): number {
      return Math.floor(r / 3) * 3 + Math.floor(c / 3);
   }
}
// @lc code=end
