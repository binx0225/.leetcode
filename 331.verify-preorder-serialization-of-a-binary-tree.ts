/*
 * @lc app=leetcode id=331 lang=typescript
 *
 * [331] Verify Preorder Serialization of a Binary Tree
 */

// @lc code=start
function isValidSerialization(preorder: string): boolean {
   let nodes = preorder.split(',');
   let solts = 1;

   for (let node of nodes) {
      console.log(solts);
      if (solts === 0) return false;

      if (node === '#') {
         solts -= 1;
      } else {
         solts += 1;
      }
   }

   return solts === 0
};
// @lc code=end

