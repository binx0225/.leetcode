/*
 * @lc app=leetcode id=417 lang=typescript
 *
 * [417] Pacific Atlantic Water Flow
 */

// @lc code=start
function pacificAtlantic(heights: number[][]): number[][] {
   const rows = heights.length;
   const cols = heights[0].length;

   const pacific: boolean[][] = Array.from({ length: rows }, () =>
      new Array(cols).fill(false)
   );

   const atlantic: boolean[][] = Array.from({ length: rows }, () =>
      new Array(cols).fill(false)
   );

   for (let i = 0; i < rows; i++) {
      bfs(i, 0, heights[i][0], pacific);
   }

   for (let j = 0; j < cols; j++) {
      bfs(0, j, heights[0][j], pacific);
   }

   for (let i = 0; i < rows; i++) {
      bfs(i, cols - 1, heights[i][cols - 1], atlantic);
   }


   for (let j = 0; j < cols; j++) {
      bfs(rows - 1, j, heights[rows - 1][j], atlantic);
   }

   const result: number[][] = [];

   for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
         if (pacific[i][j] && atlantic[i][j]) {
            result.push([i, j]);
         }
      }
   }

   return result;

   function bfs(
      r: number,
      c: number,
      prevHeight: number,
      visited: boolean[][]
   ) {
      if (r < 0 || r >= rows) {
         return;
      }

      if (c < 0 || c >= cols) {
         return;
      }

      const currHeight = heights[r][c];
      if (currHeight < prevHeight || visited[r][c]) {
         // cannot reach
         return;
      }

      visited[r][c] = true;

      // travel up, down, left, right
      bfs(r - 1, c, currHeight, visited);
      bfs(r + 1, c, currHeight, visited);
      bfs(r, c - 1, currHeight, visited);
      bfs(r, c + 1, currHeight, visited);
   }
}
// @lc code=end
