/*
 * @lc app=leetcode id=98 lang=typescript
 *
 * [98] Validate Binary Search Tree
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

function isValidBST(root: TreeNode | null): boolean {
   if (root === null) return true;

   // recursive solution
   let prevNode: TreeNode | null = null;
   function inorderTraversal(node: TreeNode | null): boolean {
      if (node === null) return true;

      const left = inorderTraversal(node.left);
      if (left === false) {
         return false;
      }

      if (prevNode !== null && node.val <= prevNode.val) {
         return false;
      }

      prevNode = node;
      return inorderTraversal(node.right);      
   }

   return inorderTraversal(root);

   // iterative solution
   // let prevNode: TreeNode | null = null;
   // const queue: TreeNode[] = [];

   // while (root !== null || queue.length > 0) {
   //    while(root !== null) {
   //       queue.push(root);
   //       root = root.left;
   //    }

   //    root = queue.pop();
   //    console.log(root.val);
   //    if (prevNode !== null) {
   //       if (prevNode.val >= root.val) {
   //          return false;
   //       }
   //    }

   //    prevNode = root;
   //    root = root.right;
   // }

   // return true;


}

// @lc code=end
