/*
 * @lc app=leetcode id=53 lang=typescript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
    let maxSum = 10 ** 4 * -1;
    let currSum = 0;

    for (let num of nums) {
      currSum += num;
      if (currSum > maxSum) maxSum = currSum;

      if (currSum < 0) currSum = 0; // reset
    }

    return maxSum;
};
// @lc code=end

