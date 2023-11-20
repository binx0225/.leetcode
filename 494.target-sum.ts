/*
 * @lc app=leetcode id=494 lang=typescript
 *
 * [494] Target Sum
 */

// @lc code=start
function findTargetSumWays(nums: number[], target: number): number {
   const len = nums.length;
   let memo: any = {};

   function depthOderTraversal(sum: number, index: number) {
      const key = `${sum},${index}`;
      if (key in memo) return memo[key];
      if (index >= len) {
         if (sum === target) {
            return 1;
         } else {
            return 0;
         }
      }

      const plusSum = depthOderTraversal(sum + nums[index], index + 1);
      const minSum = depthOderTraversal(sum - nums[index], index + 1);
      const result = plusSum + minSum;
      memo[key] = result;

      return result;
   }

   return depthOderTraversal(0, 0);
}
// @lc code=end
