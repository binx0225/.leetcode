#
# @lc app=leetcode id=268 lang=python3
#
# [268] Missing Number
#

# @lc code=start
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        n = len(nums)
        totalSum = n*(n+1)//2
        sum = 0
        for num in nums:
            sum += num
        return totalSum - sum
# @lc code=end

