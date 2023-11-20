/*
 * @lc app=leetcode id=481 lang=typescript
 *
 * [481] Magical String
 */

// @lc code=start
function magicalString(n: number): number {
   if (n <= 0) return 0;
   if (n <= 3) return 1;

   let s = ["1", "2", "2"];
   let ptr = 2; // Pointer to read from the string
   let num = 1; // Number to be added ('1' or '2')

   while (s.length < n) {
      for (let i = 0; i < +s[ptr]; i++) {
         s.push(num.toString());
      }
      num = num === 1 ? 2 : 1; // Alternate between '1' and '2'
      ptr++;
   }

   // Count the number of '1's in the first n characters
   return s.slice(0, n).filter((char) => char === "1").length;
}
// @lc code=end
