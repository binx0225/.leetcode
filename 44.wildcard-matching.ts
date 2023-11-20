/*
 * @lc app=leetcode id=44 lang=typescript
 *
 * [44] Wildcard Matching
 */

// @lc code=start
function isMatch(s: string, p: string): boolean {
   const dp: boolean[][] = Array.from({length: s.length + 1}, () => Array(p.length + 1).fill(false));
   // Empty pattern can match with empty string
   dp[0][0] = true;

   // Only '*' can match with empty string
   for (let j = 1; j <= p.length; j++) {
       if (p[j - 1] === '*') {
           dp[0][j] = dp[0][j - 1];
       }
   }

   for (let i = 1; i <= s.length; i++) {
       for (let j = 1; j <= p.length; j++) {
           if (p[j - 1] === '*') {
               dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
           } else if (p[j - 1] === '?' || s[i - 1] === p[j - 1]) {
               dp[i][j] = dp[i - 1][j - 1];
           }
       }
   }

   return dp[s.length][p.length];

};
// @lc code=end

