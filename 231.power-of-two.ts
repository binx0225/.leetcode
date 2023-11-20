/*
 * @lc app=leetcode id=231 lang=typescript
 *
 * [231] Power of Two
 */

// @lc code=start
function isPowerOfTwo(n: number): boolean {
    let bitCount = 0;
    while (n > 0) {
      if (n & 1) bitCount++;
      n = n >> 1;
    }

    return bitCount === 1;
};
// @lc code=end

