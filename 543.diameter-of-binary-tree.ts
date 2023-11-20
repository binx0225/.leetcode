/*
 * @lc app=leetcode id=543 lang=typescript
 *
 * [543] Diameter of Binary Tree
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

function diameterOfBinaryTree(root: TreeNode | null): number {
    let diameter = 0;

   function dfs(node: TreeNode | null) {
      if (node === null) return 0;

      let leftHeight = dfs(node.left);
      let rightHeight = dfs(node.right);

      diameter = Math.max(diameter, leftHeight + rightHeight);

      return Math.max(leftHeight, rightHeight) + 1;
   }

   dfs(root);
   return diameter;
};
// @lc code=end

