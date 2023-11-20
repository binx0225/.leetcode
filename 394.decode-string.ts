/*
 * @lc app=leetcode id=394 lang=typescript
 *
 * [394] Decode String
 */

// @lc code=start
function decodeString(s: string): string {
    
   let k: number = 0;
   let currStr: string = '';
   const stack: {currStr: string, k: number} [] = [];
       
   for (let i = 0; i < s.length; i++) {
       
       // parse k
       if (!isNaN(parseInt(s[i]))) {
           k = k * 10 + parseInt(s[i]);
       } else if (s[i] === '[') {
           stack.push({currStr, k});
           currStr = '';
           k = 0;
       } else if (s[i] === ']') {
           const prev = stack.pop();
           if (prev !== undefined) currStr = prev.currStr + currStr.repeat(prev.k);
       } else {
           // chars
           currStr += s[i];
       }
           
   }
   
   return currStr;

};
// @lc code=end

