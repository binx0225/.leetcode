/*
 * @lc app=leetcode id=324 lang=typescript
 *
 * [324] Wiggle Sort II
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function wiggleSort(nums: number[]): void {
   nums.sort((a, b) => a - b);

   let n = nums.length;
   let medianIndex = Math.floor((n -1 ) / 2);
   let largeIndex = n - 1;

   let sorted = [...nums];

       // Merge two halves
       for (let i = 0; i < n; i++) {
         // Place larger elements at even indices
         if (i % 2 === 0) {
             nums[i] = sorted[medianIndex];
             medianIndex--;
         } else { // Place smaller elements at odd indices
             nums[i] = sorted[largeIndex];
             largeIndex--;
         }
     }
}
// @lc code=end
