#
# @lc app=leetcode id=219 lang=python3
#
# [219] Contains Duplicate II
#

# @lc code=start
class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        hashMap = {}
        for i in range(0, len(nums)):
            num = nums[i]
            if num in hashMap:
                j = hashMap.get(num)
                if i - j <= k:
                    return True
                
            hashMap[num] = i
            
        return False
# @lc code=end

