/*
 * @lc app=leetcode id=200 lang=typescript
 *
 * [200] Number of Islands
 */

// @lc code=start
function numIslands(grid: string[][]): number {
   let count = 0;
   const rows = grid.length;
   const cols = grid[0].length;

   // iterate each cell
   for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
         if (grid[i][j] === '1') {
            count++;
            bfs(i, j);
         }
      }
   }
   

   function bfs(r: number, c: number) {
      // out of bounds check
      if (r < 0 || r >= rows) return;
      if (c < 0 || c >= cols) return; 
      // reached water, stop 
      if (grid[r][c] === '0') return;
      // found land, continue
      if (grid[r][c] === '1') grid[r][c] = '0';

      // check up, down, left, right 
      bfs(r - 1, c);
      bfs(r + 1, c);
      bfs(r, c - 1);
      bfs(r, c + 1);
   }
    
   return count;
};
// @lc code=end

