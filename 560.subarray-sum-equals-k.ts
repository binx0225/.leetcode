/*
 * @lc app=leetcode id=560 lang=typescript
 *
 * [560] Subarray Sum Equals K
 */

// @lc code=start
function subarraySum(nums: number[], k: number): number {
   // let result = 0;

   // for (let i = 0; i < nums.length; i++) {
   //    backtrack(i, 0);
   // }

   // return result;

   // function backtrack(i: number, currVal: number) {
   //    if (i >= nums.length) return;

   //    if (currVal + nums[i] === k) {
   //       result++;
   //    }

   //    backtrack(i + 1, currVal + nums[i]);
   // }


   let count = 0;
   let currSum = 0;
   let sumMap = new Map<number, number>();
   sumMap.set(0, 1); // To handle the case when a subarray starts from index 0

   for (let i = 0; i < nums.length; i++) {
       currSum += nums[i];

       if (sumMap.has(currSum - k)) {
           count += sumMap.get(currSum - k)!;
       }

       sumMap.set(currSum, (sumMap.get(currSum) || 0) + 1);
   }

   return count;
}
// @lc code=end
