/*
 * @lc app=leetcode id=299 lang=typescript
 *
 * [299] Bulls and Cows
 */

// @lc code=start
function getHint(secret: string, guess: string): string {
   let output: string = "";
   let bulls = 0;
   let cows = 0;
   const map = new Map<string, number>();
   let guessWithoutBulls = "";

   for (let i = 0; i < secret.length; i++) {
      if (secret[i] === guess[i]) {
         bulls++;
      } else {
         const currCount = map.get(secret[i]);
         map.set(secret[i], (currCount ?? 0) + 1);
         guessWithoutBulls += guess[i];
      }
   }

   for (let i = 0; i < guessWithoutBulls.length; i++) {
      if (map.has(guessWithoutBulls[i])) {
         const currCount = map.get(guessWithoutBulls[i]) ?? 0;
         if (currCount > 0) {
            cows++;
            map.set(guessWithoutBulls[i], currCount - 1);
         }
      }
   }

   return `${bulls}A${cows}B`;
}
// @lc code=end
