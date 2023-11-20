/*
 * @lc app=leetcode id=687 lang=typescript
 *
 * [687] Longest Univalue Path
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function longestUnivaluePath(root: TreeNode | null): number {
   let longestPath = 0;

   if (root !== null) {
      dfs(root, root.val);
   }

   return longestPath;

   /**
    * Depth first search
    * @param node current node
    * @param parentValue value of parent node
    */
   function dfs(node: TreeNode | null, parentValue: number): number {
      if (node === null) return 0;

      const left = dfs(node.left, node.val);
      const right = dfs(node.right, node.val);

      const currPath = left + right; // longest path when split from current node
      longestPath = Math.max(longestPath, currPath);

      if (parentValue === node.val) {
         return 1 + Math.max(left, right);
      } else {
         return 0;
      }
   }
}
// @lc code=end
