/*
 * @lc app=leetcode id=96 lang=typescript
 *
 * [96] Unique Binary Search Trees
 */

// @lc code=start
function numTrees(n: number): number {
    if (n === 0 || n === 1) return 1;
   const dp = Array(n+1).fill(0);
   dp[0] = 1;
   dp[1] = 1;

   // numTrees(3) = 1 as root, numTres(0) * numTrees(2) 
   // numTrees(3) = 2 as root, numTres(1) * numTrees(1)  
   // numTrees(3) = 3 as root, numTres(2) * numTrees(0)  
 

   for (let i = 2; i <=n; i++) {
      // left trees = i - 1
      // right trees = n - i
      for (let j = 1; j <= i; j++) {
         dp[i] += (dp[j - 1] * dp[i - j]);
      }
   }

   return dp[n];
};
// @lc code=end

