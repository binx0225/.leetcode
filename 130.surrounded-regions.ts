/*
 * @lc app=leetcode id=130 lang=typescript
 *
 * [130] Surrounded Regions
 */

// @lc code=start
/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
   const m = board.length;
   const n = board[0].length;

   // 1. capture unsurrounded regions
   for (let i = 0; i < m; i++) {
      if (board[i][0] === "O") dfs(i, 0);
      if (board[i][n - 1] === "O") dfs(i, n - 1);
   }

   for (let j = 0; j < n; j++) {
      if (board[0][j] === "O") dfs(0, j);
      if (board[m - 1][j] === "O") dfs(m - 1, j);
   }

   for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
         if (board[i][j] === "O") {
            board[i][j] = "X";
         } else if (board[i][j] === "T") {
            board[i][j] = "O";
         }
      }
   }

   function dfs(r: number, c: number) {
      if (r < 0 || r >= m || c < 0 || c >= n || board[r][c] !== "O") return;

      if (board[r][c] === "O") board[r][c] = "T";

      // up, down, left, right
      dfs(r - 1, c);
      dfs(r + 1, c);
      dfs(r, c - 1);
      dfs(r, c + 1);
   }
}
// @lc code=end
