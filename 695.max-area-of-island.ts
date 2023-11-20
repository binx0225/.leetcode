/*
 * @lc app=leetcode id=695 lang=typescript
 *
 * [695] Max Area of Island
 */

// @lc code=start
function maxAreaOfIsland(grid: number[][]): number {
   if (grid.length === 0 || grid[0].length === 0) return 0;

   let maxArea = 0;
   const visited = new Set<string>

   for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[0].length; c++) {
         const size = explore(r, c);
         if (size > maxArea) maxArea = size;
      }
   }

   return maxArea;


   function explore(r: number, c: number): number {
      // index out of range
      if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length) return 0;
      // check if visited
      const key = `${r},${c}`;
      if (visited.has(key)) return 0
      // water
      if (grid[r][c] === 0) return 0;

      visited.add(key);
      let size = 1
      size += explore(r - 1, c);
      size += explore(r + 1, c);
      size += explore(r, c - 1);
      size += explore(r, c + 1);

      return size;
   }
    
};
// @lc code=end

