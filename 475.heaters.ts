/*
 * @lc app=leetcode id=475 lang=typescript
 *
 * [475] Heaters
 */

// @lc code=start
function findRadius(houses: number[], heaters: number[]): number {
   let minRadius = 0;

   for (let house of houses) {
      // console.log(`house: ${house}`);

      let minDistance = Infinity;
      for (let heater of heaters) {
         const distance = Math.abs(house - heater);
         minDistance = Math.min(minDistance, distance);
         // console.log(`min distance: ${minDistance} between header: ${heater}`);
      }

      minRadius = Math.max(minRadius, minDistance);
      // console.log(`minRadius: ${minRadius}`);
   }

   return minRadius;
}
// @lc code=end
