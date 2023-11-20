/*
 * @lc app=leetcode id=42 lang=typescript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
function trap(height: number[]): number {
   let water = 0;
   let l = 0;
   let r = height.length - 1;
   let maxL = height[l];
   let maxR = height[r];

   while (l < r) {
       if (maxL < maxR) {
           l++;
           if (height[l] > maxL) maxL = height[l];
           water += maxL - height[l];

       } else {
           r--;
           if (height[r] > maxR) maxR = height[r];
           water += maxR - height[r];
       }
   }

   return water;
};
// @lc code=end

