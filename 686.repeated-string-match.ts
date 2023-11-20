/*
 * @lc app=leetcode id=686 lang=typescript
 *
 * [686] Repeated String Match
 */

// @lc code=start
function repeatedStringMatch(a: string, b: string): number {
   if (b === "") return 0;

   let repeatedA = a;
   let count = 1;

   while (repeatedA.length < b.length) {
      repeatedA += a;
      count++;
   }

   if (repeatedA.includes(b)) {
      return count;
   }

   repeatedA += a;
   if (repeatedA.includes(b)) {
      return count + 1;
   }

   return -1;
}
// @lc code=end
