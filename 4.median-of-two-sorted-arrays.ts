/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * 
 * 
 * 1. Choose the Smaller Array: To ensure the binary search is applied on 
 * the smaller array for efficiency.

   2. Binary Search: Perform a binary search on the smaller array. 
   In each iteration, partition the smaller array and calculate the 
   partition index for the larger array such that the total number 
   of elements on the left side is equal to the total number on the 
   right side (or one more if the total number of elements is odd).

   3. Check Partition: Ensure the elements on the left side of
    both partitions are less than or equal to the elements 
    on the right side. If not, adjust the partition.

   4. Calculate Median: Once the correct partition is found, 
   calculate the median based on the total number of elements (odd or even).

   O(log(min(m, n)))
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
   if (nums1.length > nums2.length) {
      [nums1, nums2] = [nums2, nums1];
  }

  const totalLength = nums1.length + nums2.length;
  const halfLength = Math.floor(totalLength / 2);

  let left = 0;
  let right = nums1.length;

  while (left <= right) {
      const partition1 = Math.floor((left + right) / 2);
      const partition2 = halfLength - partition1;

      const maxLeft1 = partition1 === 0 ? Number.NEGATIVE_INFINITY : nums1[partition1 - 1];
      const minRight1 = partition1 === nums1.length ? Number.POSITIVE_INFINITY : nums1[partition1];

      const maxLeft2 = partition2 === 0 ? Number.NEGATIVE_INFINITY : nums2[partition2 - 1];
      const minRight2 = partition2 === nums2.length ? Number.POSITIVE_INFINITY : nums2[partition2];

      if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
          if (totalLength % 2 === 0) {
              return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
          } else {
              return Math.min(minRight1, minRight2);
          }
      } else if (maxLeft1 > minRight2) {
          right = partition1 - 1;
      } else {
          left = partition1 + 1;
      }
  }

  throw new Error("Arrays are not sorted or input is invalid");
};
// @lc code=end

