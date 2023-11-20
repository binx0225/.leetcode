/*
 * @lc app=leetcode id=97 lang=typescript
 *
 * [97] Interleaving String
 */

// @lc code=start
function isInterleave(s1: string, s2: string, s3: string): boolean {
   const len1 = s1.length;
   const len2 = s2.length;

   function dfs(i: number, j: number): boolean {
      if (i === len1 && j === len2) {
         return true;
      }

      if (i < len1 && s1[i] === s3[i+j] && dfs(i+1, j)) {
         return true;
      }

      if (j < len2 && s2[j] === s3[i+j] && dfs(i, j+1)) {
         return true;
      }

      return false;
   }

   return dfs(0, 0);
}
// @lc code=end
