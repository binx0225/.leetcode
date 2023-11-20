#
# @lc app=leetcode id=118 lang=python3
#
# [118] Pascal's Triangle
#

# @lc code=start
class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        if numRows == 0:
            return []
        if numRows == 1:
            return [[1]]
        
        preRow = self.generate(numRows - 1)
        currRow = [1] * numRows
        for i in range (1, numRows - 1):
            currRow[i] = preRow[-1][i - 1] + preRow[-1][i]
        preRow.append(currRow)
        return preRow
        
        
# @lc code=end

¸