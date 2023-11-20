#
# @lc app=leetcode id=121 lang=python3
#
# [121] Best Time to Buy and Sell Stock
#

# @lc code=start
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        buyPrice = prices[0]
        maxProfit = 0
        
        for i in range(1, len(prices)):
            profit = prices[i] - buyPrice
            #print("buy price:", buyPrice)
            #print("sell price:", prices[i])
            maxProfit = max(maxProfit, profit)
            buyPrice = min(buyPrice, prices[i])
            
        return maxProfit
            
# @lc code=end

