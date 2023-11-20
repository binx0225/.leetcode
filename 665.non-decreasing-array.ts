/*
 * @lc app=leetcode id=665 lang=typescript
 *
 * [665] Non-decreasing Array
 */

// @lc code=start
function checkPossibility(nums: number[]): boolean {
   if (nums.length <= 1) return true;

   let count = 0;

   for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
         count++;
         if (i === 0 || nums[i - 1] <= nums[i + 1]) {
            nums[i] = nums[i + 1]; // Lower nums[i] to match nums[i + 1]
         } else {
            nums[i + 1] = nums[i]; // Raise nums[i + 1] to match nums[i]
         }
      }

      if (count > 1) return false;
   }

   return true;
}
// @lc code=end
