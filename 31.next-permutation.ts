/*
 * @lc app=leetcode id=31 lang=typescript
 *
 * [31] Next Permutation
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */

// 1. Find the First Decreasing Element: Traverse the array from the end and
// find the first element that is smaller than its next element.
// Let's call this element nums[i].

// 2. Find the Element to Swap: If such an element is found,
// traverse the array again from the end and find the first
// element that is greater than nums[i]. Let's call this element nums[j].

// 3. Swap: Swap nums[i] and nums[j].

// 4. Reverse the Subarray: Reverse the subarray that starts right after
//  the index i.

// 5. Handle the Last Permutation Case: If no such nums[i] is found,
// it means the array is in its last permutation (descending order).
// In this case, simply reverse the entire array to get to the first permutation (ascending order).
function nextPermutation(nums: number[]): void {
   const n = nums.length;
   let i = n - 2;

   // Find the first decreasing element
   while (i >= 0 && nums[i] >= nums[i + 1]) {
      i--;
   }

   if (i >= 0) {
      // Find the element to swap with
      let j = n - 1;
      while (nums[j] <= nums[i]) {
         j--;
      }
      // Swap
      [nums[i], nums[j]] = [nums[j], nums[i]];
   }

   // Reverse the subarray
   let left = i + 1,
      right = n - 1;
   while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
   }
}
// @lc code=end
