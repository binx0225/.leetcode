/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfit(prices: number[]): number {
   let max = 0;
   let buy = 0;
   const length = prices.length;

   for (let i = 0; i < length; i++) {
      if (prices[i] < prices[buy]) {
         buy = i;
      } else {
         const profit = prices[i] - prices[buy];
         if (profit > max) {
            max = profit;
         }
      }
   }

   return max;
}
// @lc code=end
