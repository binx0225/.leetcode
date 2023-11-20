#
# @lc app=leetcode id=228 lang=python3
#
# [228] Summary Ranges
#

# @lc code=start
class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        if not nums: return []
        
        result = []
        start = nums[0]
        
        for i in range(1, len(nums) + 1):
            if i == len(nums) or nums[i] - nums[i - 1] > 1:
                end = nums[i - 1]
                if start == end:
                    result.append(str(start))
                else:
                    result.append(str(start) + "->" + str(end))
                    
                if (i < len(nums)):
                    start = nums[i]
                
        return result
            
        
# @lc code=end

