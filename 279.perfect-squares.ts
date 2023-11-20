/*
 * @lc app=leetcode id=279 lang=typescript
 *
 * [279] Perfect Squares
 */

// @lc code=start
/*
We initialize a dp array of length n + 1 with all elements set to 
Infinity (except dp[0], which is set to 0).

For each i from 1 to n, we iterate through all j where j*j <= i. 
For each j, we check if dp[i - j*j] + 1 is less than the current 
value of dp[i]. If it is, we update dp[i].

The + 1 in dp[i - j*j] + 1 accounts for the perfect square j*j that
 we are adding to the sum to form i.
 
Finally, dp[n] will have the least number of perfect square numbers 
that sum to n.
*/
function numSquares(n: number): number {
    const dp: number[] = Array(n + 1).fill(0);
    
    for (let i = 1; i <= n; i++) {
      dp[i] = i;
      for (let j = 1; j * j <= i; j++) {
         dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
      }
    }

    return dp[n];
};
// @lc code=end

