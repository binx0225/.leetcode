#
# @lc app=leetcode id=1 lang=python3
#
# [1] Two Sum
#

# @lc code=start
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        numMap = {}
        for i, num in enumerate(nums):
            complement = target - nums[i]
            if (complement in numMap):
                return [numMap[complement], i]
            numMap[num] = i
        
            
# @lc code=end

