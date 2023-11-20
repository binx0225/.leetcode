/*
 * @lc app=leetcode id=40 lang=typescript
 *
 * [40] Combination Sum II
 */

// @lc code=start
function combinationSum2(candidates: number[], target: number): number[][] {
   const res: number[][] = [];
   const nums: number[] = [];
   candidates.sort((a, b) => a - b); // O(n*log(n))
   backtrack(0, candidates, target, 0, res, nums); // O(n*2^n)
   return res;
}

function backtrack(
   i: number,
   candidates: number[],
   target: number,
   total: number,
   res: number[][],
   nums: number[]
) {
   if (total === target) {
      res.push([...nums]);
   }

   if (i === candidates.length || total > target) return;
   for (let j = i; j < candidates.length; j++) {
      // Skip duplicates
      if (j > i && candidates[j] === candidates[j - 1]) continue;

      nums.push(candidates[j]);
      backtrack(j + 1, candidates, target, total + candidates[j], res, nums);
      nums.pop();
   }
}

// @lc code=end
