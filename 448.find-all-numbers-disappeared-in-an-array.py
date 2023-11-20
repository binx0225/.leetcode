#
# @lc app=leetcode id=448 lang=python3
#
# [448] Find All Numbers Disappeared in an Array
#

# @lc code=start
class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        numSet = set()
        ans = []
        for num in nums:
            numSet.add(num)
        
        for i in range(1, len(nums) + 1):
            if i not in numSet:
                ans.append(i)
        
        return ans
        
# @lc code=end

