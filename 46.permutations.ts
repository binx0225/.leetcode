/*
 * @lc app=leetcode id=46 lang=typescript
 *
 * [46] Permutations
 */

// @lc code=start
function permute(nums: number[]): number[][] {
   const result: number[][] = [];
   const permutation: number[] = [];
   
   backtrack(nums, permutation, result);
    
   return result;
};

function backtrack(nums: number[], permutation: number[], result: number[][]) {
   if (permutation.length === nums.length) {
      result.push([...permutation]);
   }

   for (let i = 0; i < nums.length; i++) {
      if (permutation.includes(nums[i])) continue;
      permutation.push(nums[i]);
      backtrack(nums, permutation, result);
      permutation.pop();
   }
}

// @lc code=end

