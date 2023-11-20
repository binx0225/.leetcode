/*
 * @lc app=leetcode id=91 lang=typescript
 *
 * [91] Decode Ways
 */

// @lc code=start
function numDecodings(s: string): number {
   if (!s) return 1;
   if (s[0] === "0") return 0;
   const dp = Array(s.length + 1).fill(0);

   dp[0] = 1;
   dp[1] = 1;

   for (let i = 2; i <= s.length; i++) {
      let curr = parseInt(s.slice(i - 1, i));
      let previous = parseInt(s.slice(i - 2, i));

      if (curr >= 1 && curr <= 9) {
         dp[i] = dp[i - 1];
      }
      if (previous >= 10 && previous <= 26) {
         dp[i] += dp[i - 2];
      }
      // console.log(`${first}, ${second}`);
      // const prevNum = parseInt(s.slice(i - 2, i));
      // console.log(`${i} : prev ${prevNum}`);
      // if (prevNum ===0) {
      //    return 0;
      // }

      // if (prevNum > 26 || s[i - 2] === "0") {
      //    dp[i] = dp[i - 1];
      // } else {
      //    if (s[i - 1] === "0") {
      //       dp[i] = dp[i - 2];
      //    } else {
      //       dp[i] = dp[i - 1] + dp[i - 2];
      //    }
      // }
   }

   console.log(dp);
   return dp[s.length];
}
// @lc code=end
