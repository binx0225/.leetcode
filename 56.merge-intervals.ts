/*
 * @lc app=leetcode id=56 lang=typescript
 *
 * [56] Merge Intervals
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
   let i = 0;
   intervals.sort((a, b) => {
      return a[0] - b[0];
   });

   while (i < intervals.length - 1) {
      if (intervals[i][1] >= intervals[i + 1][0]) {
         intervals[i][1] = Math.max(intervals[i][1], intervals[i + 1][1]);
         intervals.splice(i + 1, 1);
      } else {
         i++;
      }
   }

   return intervals;
}
// @lc code=end
