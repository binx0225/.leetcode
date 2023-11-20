/*
 * @lc app=leetcode id=139 lang=typescript
 *
 * [139] Word Break
 */

// @lc code=start
function wordBreak(s: string, wordDict: string[]): boolean {
   const dp: boolean[] = Array(s.length + 1).fill(false);

   // from backwards
   // dp[s.length] = true;

   // for (let i = s.length - 1; i >= 0; i--) {
   //    console.log('i ', i);
   //    let subStr = s.slice(i);
   //    console.log("sub str: ", subStr);
   //    for (let word of wordDict) {
   //       if (subStr.startsWith(word)) {
   //          dp[i] = dp[i + word.length];

   //          if (dp[i]) {
   //             break;
   //          }
   //       }
   //    }
   // }

   // return dp[0];

   // from start
   // dp[0] = true; // The empty string is always a valid segmentation

   // for (let i = 1; i <= s.length; i++) {
   //    for (const word of wordDict) {
   //       if (word.length <= i && dp[i - word.length]) {
   //          const subStr = s.substring(i - word.length, i);
   //          if (subStr === word) {
   //             dp[i] = true;
   //             break; // Found a valid break, no need to check further for this index
   //          }
   //       }
   //    }
   // }

   // return dp[s.length];
   const wordSet: Set<string> = new Set(wordDict);
   const memo: Map<string, boolean> = new Map();

   function backtrack(start: number): boolean {
      if (start === s.length) return true;
      const subStr = s.substring(start);

      if (memo.has(subStr)) {
         return memo.get(subStr)!;
      }

      for (let end = start + 1; end <= s.length; end++) {
         const word = s.substring(start, end);

         if (wordSet.has(word) && backtrack(end)) {
            memo.set(subStr, true);
            return true;
         }
      }

      memo.set(subStr, false);
      return false;
   }

   return backtrack(0);
}
// @lc code=end
