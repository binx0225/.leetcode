/*
 * @lc app=leetcode id=57 lang=typescript
 *
 * [57] Insert Interval
 */

// @lc code=start
function insert(intervals: number[][], newInterval: number[]): number[][] {
   const length = intervals.length;
   let i = 0;
   for (i = 0; i < length; i++) {
      if (intervals[i][0] >= newInterval[0]) {
         break;
      }
   }

   intervals.splice(i, 0, newInterval);

   if (i > 0) {
      i -= 1;
   }

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
