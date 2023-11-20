/*
 * @lc app=leetcode id=90 lang=typescript
 *
 * [90] Subsets II
 */

// @lc code=start
function subsetsWithDup(nums: number[]): number[][] {
   const res: number[][] = [];
   const subset: number[] = [];
   nums.sort((a, b) => a - b);

   backtrack(0, nums, subset, res);
   return res;
}

function backtrack(
   index: number,
   nums: number[],
   subset: number[],
   res: number[][]
) {
   if (index >= nums.length) {
      res.push([...subset]);
      return;
   }

   subset.push(nums[index]);
   backtrack(index + 1, nums, subset, res);

   subset.pop();
   while (index + 1 < nums.length && nums[index] === nums[index + 1]) {
      index += 1;
   }
   backtrack(index + 1, nums, subset, res);
}
// @lc code=end
