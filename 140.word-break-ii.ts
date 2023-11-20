/*
 * @lc app=leetcode id=140 lang=typescript
 *
 * [140] Word Break II
 */

// @lc code=start
function wordBreak(s: string, wordDict: string[]): string[] {
   const wordSet = new Set<string>(wordDict);
   const memo = new Map<string, string[]>();

   function backtrack(start: number): string[] {
      const subStr = s.substring(start);
      if (memo.has(subStr)) return memo.get(subStr)!;
      if (start === s.length) return [""];

      let sentence: string[] = [];
      for (let end = start + 1; end <= s.length; end++) {
         let word = s.substring(start, end);

         if (wordSet.has(word)) {
            const moreWords = backtrack(end);

            for (const w of moreWords) {
               sentence.push(word + (w.length === 0 ? "" : " " + w));
            }
         }
      }

      memo.set(subStr, sentence);
      return sentence;
   }

   return backtrack(0);
}
// @lc code=end
