/*
 * @lc app=leetcode id=274 lang=typescript
 *
 * [274] H-Index
 */

// @lc code=start
/*
1. Sort the Citations: First, sort the array of citations in descending
 order. This will help in quickly identifying the papers that have at 
 least h citations.

2. Find the H-Index: Iterate through the sorted array and find the last
 position where the citation count is greater than or equal to the 
 position index (considering 1-based indexing). The value of the index 
 at this position will be the H-Index.


*/
function hIndex(citations: number[]): number {
   citations.sort((a, b) => b - a);
   let h = 0;

   for (let i = 0; i < citations.length; i++) {
      if (citations[i] >= i + 1) {
         h = i + 1;
      } else {
         break;
      }
   }

   return h;
}
// @lc code=end
