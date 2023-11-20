/*
 * @lc app=leetcode id=72 lang=typescript
 *
 * [72] Edit Distance
 */

// @lc code=start
function minDistance(word1: string, word2: string): number {
   const rows = word2.length + 1;
   const cols = word1.length + 1;

   const dbTable = Array.from({ length: rows }, () =>
      Array(cols).fill(0)
   );


   for (let i = 0; i < rows; i++) {
      dbTable[i][0] = i;
   }

   for (let j = 0; j < cols; j++) {
      dbTable[0][j] = j;
   }

   for (let i = 1; i < rows; i++) {
      for (let j = 1; j <  cols; j++) {
         const rep = dbTable[i - 1][j - 1];
         const del = dbTable[i - 1][j];
         const ins = dbTable[i][j - 1]; 
         // charactor matches
         if (word1[j - 1] === word2[i - 1]) {
            dbTable[i][j] = rep;
         } else {
            dbTable[i][j] = Math.min(rep, del, ins) + 1;
         }
      }
   }

   return dbTable[rows - 1][cols - 1];

   // m: word1.length
   // n: word2.length
   // time complexity: O(m*n) 
   // space complexity: O(m*n)
}
// @lc code=end
