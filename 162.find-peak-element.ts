/*
 * @lc app=leetcode id=162 lang=typescript
 *
 * [162] Find Peak Element
 */

// @lc code=start
function findPeakElement(nums: number[]): number {
   let i = 0;
   let j = nums.length - 1;

   if (nums.length === 1) return 0;

   while (i <= j) {
      if (i === 0 && nums[i] > nums[i + 1]) return i;
      if (j === nums.length - 1 && nums[j] > nums[j - 1]) return j;
      if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) return i;
      if (nums[j] > nums[j - 1] && nums[j] > nums[j + 1]) return j;
      i++;
      j--;
   }

   return 0;
}
// @lc code=end
