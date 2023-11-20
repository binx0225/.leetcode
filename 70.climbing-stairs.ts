/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
function climbStairs(n: number): number {
   // tabulation
   // if (n === 0 && n === 1) return 1;
   // const stairs = Array(n + 1).fill(0);
   // stairs[0] = 1;
   // stairs[1] = 1;

   // for (let i = 2; i <= n ;i++) {
   //    stairs[i] = stairs[i-1] + stairs[i-2];
   // }

   // return stairs[n];

   // space optimisation
   // if (n === 0 || n === 1) return 1;
   // let prev = 1;
   // let curr = 1;

   // for (let i = 2; i <= n; i++) {
   //    let temp = curr;
   //    curr = curr + prev;
   //    prev = temp;
   // }

   // return curr;

   const memo: any = {};
   function climbSteps(n: number): number {
      if (n === 0 || n === 1) return 1;
      if (n in memo) return memo[n];

      memo[n] = climbSteps(n - 1) + climbSteps(n - 2);
      return memo[n];
   }

   return climbSteps(n);
}
// @lc code=end
