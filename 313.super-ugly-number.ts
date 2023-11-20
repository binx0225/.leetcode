/*
 * @lc app=leetcode id=313 lang=typescript
 *
 * [313] Super Ugly Number
 */

// @lc code=start
function nthSuperUglyNumber(n: number, primes: number[]): number {
   let ugly = new Array(n);
   ugly[0] = 1;

   let indices = new Array(primes.length).fill(0);
   let nextMultiple = new Array(primes.length);

   for (let i = 1; i < n; i++) {
       for (let j = 0; j < primes.length; j++) {
           nextMultiple[j] = ugly[indices[j]] * primes[j];
       }

       ugly[i] = Math.min(...nextMultiple);

       for (let j = 0; j < primes.length; j++) {
           if (ugly[i] === nextMultiple[j]) {
               indices[j]++;
           }
       }
   }

   return ugly[n - 1];
}
// @lc code=end
