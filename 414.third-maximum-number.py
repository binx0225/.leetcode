#
# @lc app=leetcode id=414 lang=python3
#
# [414] Third Maximum Number
#

# @lc code=start
import sys

class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        first, second, third = -sys.maxsize, -sys.maxsize, -sys.maxsize
        for num in nums:
            if num > first:
                third = second
                second = first
                first = num
            elif num > second and num != first:
                third = second
                second = num
            elif num > third and num != second and num != first:
                third = num
                
        if third == -sys.maxsize:
            return first
        else:
            return third
# @lc code=end

