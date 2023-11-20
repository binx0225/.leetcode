/*
 * @lc app=leetcode id=287 lang=typescript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
function findDuplicate(nums: number[]): number {
   const hashSet = new Set<number>;

   for (let num of nums) {
      if (hashSet.has(num)) return num;
      hashSet.add(num);
   }
    
};
// @lc code=end

