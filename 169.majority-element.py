#
# @lc app=leetcode id=169 lang=python3
#
# [169] Majority Element
#

# @lc code=start
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        hashMap = {}
        length = len(nums)
        for i in range(0, length):
            if (nums[i] in hashMap):
                hashMap[nums[i]] += 1
            else:
                hashMap[nums[i]] = 1
            
            if hashMap[nums[i]] > length // 2:
                return nums[i]
            
            
        
# @lc code=end

