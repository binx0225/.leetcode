/*
 * @lc app=leetcode id=228 lang=typescript
 *
 * [228] Summary Ranges
 */

// @lc code=start
function summaryRanges(nums: number[]): string[] {
   const output: string[] = [];
   let currStr: string | null = null;
   for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i + 1] || nums[i + 1] - nums[i] !== 1) {
         if (currStr === null) {
            output.push(nums[i].toString());
         } else {
            currStr += nums[i].toString();
            output.push(currStr);
            currStr = null;
         }
      } else {
         if (currStr === null) {
            currStr = nums[i].toString() + '->';
         }
      }
   }

   return output;
}
// @lc code=end
