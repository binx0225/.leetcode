/*
 * @lc app=leetcode id=10 lang=typescript
 *
 * [10] Regular Expression Matching
 */

// @lc code=start
/*
The dynamic programming approach involves creating a 2D array dp where 
dp[i][j] represents whether the first i characters of the string s match 
the first j characters of the pattern p.

1. Initialize the DP Array: Create a 2D array dp with dimensions 
(s.length + 1) x (p.length + 1) and initialize all values to false. 
The extra row and column are for handling the cases where the string 
or pattern is empty.

2. Base Case: dp[0][0] = true, since an empty string matches an empty pattern.

3. Iterate and Fill the DP Array:

4. Iterate over each character in s and p.
If characters match or p[j-1] is .: dp[i][j] = dp[i-1][j-1].
If p[j-1] is *:
Check for zero occurrences of the character before *: dp[i][j] = dp[i][j-2].
If the character before * in p matches the current character in s or is ., check 
for one or more occurrences: dp[i][j] = dp[i][j] || dp[i-1][j].
Return the Result: The result is dp[s.length][p.length].
*/

function isMatch(s: string, p: string): boolean {
   const dp: boolean[][] = Array.from({ length: s.length + 1 }, () =>
      Array(p.length + 1).fill(false)
   );
   dp[0][0] = true;

   // Handle patterns like a*, a*b*, a*b*c*...
   for (let j = 2; j <= p.length; j++) {
      if (p[j - 1] === "*") {
         dp[0][j] = dp[0][j - 2];
      }
   }

   for (let i = 1; i <= s.length; i++) {
      for (let j = 1; j <= p.length; j++) {
         if (p[j - 1] === s[i - 1] || p[j - 1] === ".") {
            dp[i][j] = dp[i - 1][j - 1];
         } else if (p[j - 1] === "*") {
            dp[i][j] = dp[i][j - 2];
            if (p[j - 2] === s[i - 1] || p[j - 2] === ".") {
               dp[i][j] = dp[i][j] || dp[i - 1][j];
            }
         }
      }
   }

   return dp[s.length][p.length];
}
// @lc code=end
