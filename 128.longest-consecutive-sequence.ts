/*
 * @lc app=leetcode id=128 lang=typescript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
   if (nums.length === 0) return 0;
   if (nums.length === 1) return 1;

   let length = 1;
   let longest = 1;
   nums.sort((a, b) => a - b);
   console.log(nums);

   for (let i = 1; i < nums.length; i++) {
      if (nums[i] - nums[i - 1] === 1) {
         length += 1;
         console.log(`i: ${i} len: `, length);

         if (length > longest) longest = length;
      } else if (nums[i] - nums[i - 1] === 0) {
         // skip same number
      } else {
         length = 1;
      }
   }

   return longest;
}
// @lc code=end
