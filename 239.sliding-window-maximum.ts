/*
 * @lc app=leetcode id=239 lang=typescript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
function maxSlidingWindow(nums: number[], k: number): number[] {
   if (nums.length === 0 || k === 0) return [];
   if (k === 1) return nums;

   let deque: number[] = [];
   let result: number[] = [];

   for (let i = 0; i < nums.length; i++) {
       // Remove indices that are out of the current window
       while (deque.length > 0 && deque[0] < i - k + 1) {
           deque.shift();
       }

       // Remove indices whose corresponding values are less than nums[i]
       while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
           deque.pop();
       }

       deque.push(i);

       // If window has reached size k, add to result
       if (i >= k - 1) {
           result.push(nums[deque[0]]);
       }
   }

   return result;
};
// @lc code=end

