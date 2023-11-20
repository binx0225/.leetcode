/*
 * @lc app=leetcode id=50 lang=typescript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
function myPow(x: number, n: number): number {
   if (n < 0) {
      x = 1 / x;
      n = -n;
   }
   return fastPow(x, n);
}

function fastPow(x: number, n: number): number {
   if (n === 0) return 1;
   if (n === 1) return x;

   const tempX = x;

   // for (let i = 1; i < n; i++) {
   //    x *= tempX;
   // }

   // return x;

   let half = fastPow(x, Math.floor(n / 2));
   if (n % 2 === 0) {
      return half * half;
   } else {
      return half * half * x;
   }
}
// @lc code=end
