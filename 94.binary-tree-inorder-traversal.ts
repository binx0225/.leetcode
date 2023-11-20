/*
 * @lc app=leetcode id=94 lang=typescript
 *
 * [94] Binary Tree Inorder Traversal
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

function inorderTraversal(root: TreeNode | null): number[] {
   // // recursive solution
   if (root === null) return [];

   // const left = inorderTraversal(root.left);
   // const right = inorderTraversal(root.right);
   // return [...left, root.val, ...right];

   // stack solution

   const stack: TreeNode[] = [];
   let result: number[] = [];
   let curr: TreeNode = root;

   while (curr !== null || stack.length > 0) {
      while(curr !== null) {
         stack.push(curr);
         console.log('pushed ', curr.val);
         curr = curr.left;
      }

      curr = stack.pop();
      result.push(curr.val);

      curr = curr.right;
   }

   return result;
}
// @lc code=end
