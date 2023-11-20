#
# @lc app=leetcode id=119 lang=python3
#
# [119] Pascal's Triangle II
#

# @lc code=start
class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        if rowIndex == 0:
            return [1]
        
        prevRow = self.getRow(rowIndex - 1)
        currRow = [1] * (rowIndex + 1)
        for i in range(1, len(currRow) - 1):
            currRow[i] = prevRow[i - 1] + prevRow[i]
        return currRow
        
# @lc code=end

