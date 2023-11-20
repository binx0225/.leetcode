/*
 * @lc app=leetcode id=79 lang=typescript
 *
 * [79] Word Search
 */

// @lc code=start
function exist(board: string[][], word: string): boolean {
   const rows = board.length;
   const cols = board[0].length;
   const path = new Set<string>();

   function dfs(r: number, c: number, i: number) {

      if (i === word.length) return true;
      const rowInbounds = r >= 0 && r < rows;
      const colInbounds = c >= 0 && c < cols;

      if (!rowInbounds || !colInbounds) return false;
      if (word[i] !== board[r][c]) return false;
      const key = `${r},${c}`;
      if (path.has(key)) return false;

      path.add(key);
      const up = dfs(r - 1, c, i + 1);
      const down = dfs(r + 1, c, i + 1);
      const left = dfs(r, c - 1, i + 1);
      const right = dfs(r, c + 1, i + 1);
      path.delete(key);
      const res = up || down || left || right;
      return res;
   }

   for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
         if (dfs(i, j, 0) === true)  return true;
      }
   }

   return false;
}
// @lc code=end
