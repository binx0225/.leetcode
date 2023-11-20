/*
 * @lc app=leetcode id=309 lang=typescript
 *
 * [309] Best Time to Buy and Sell Stock with Cooldown
 */

// @lc code=start
function maxProfit(prices: number[]): number {
   // state: true for buying, false for selling
   // if buy i + 1
   // if sell i + 2
   const memo = new Map<string, number>();

   function dfs(i: number, buying: boolean): number {
      if (i >= prices.length) {
         return 0;
      }

      const key = `${i},${buying}`
      if (memo.has(key)) {
         return memo.get(key)!;
      }

      const cooldownProfit = dfs(i + 1, buying);
      if (buying === true) {
         let buyProfit = dfs(i + 1, false) - prices[i];
         memo.set(key, Math.max(buyProfit, cooldownProfit));
      } else {
         let sellProfit = dfs(i + 2, true) + prices[i];
         memo.set(key, Math.max(sellProfit, cooldownProfit));
      }

      return memo.get(key)!;
   }

   return dfs(0, true);
}
// @lc code=end
