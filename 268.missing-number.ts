/*
 * @lc app=leetcode id=268 lang=typescript
 *
 * [268] Missing Number
 */

// @lc code=start
function missingNumber(nums: number[]): number {
   let missing = nums.length; // Initialize missing to n
   for (let i = 0; i < nums.length; i++) {
       missing ^= i ^ nums[i];
   }
   return missing;
};
// @lc code=end

