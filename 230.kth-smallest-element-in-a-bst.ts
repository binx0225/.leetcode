/*
 * @lc app=leetcode id=230 lang=typescript
 *
 * [230] Kth Smallest Element in a BST
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

function kthSmallest(root: TreeNode | null, k: number): number {
   // inorder traversal
   if (root === null) return 0;

   const stack: TreeNode[] = [];
   let curr = root;
   let i = 0;
   while (curr !== null || stack.length > 0) {
      while (curr !== null) {
         stack.push(curr);
         curr = curr.left;
      }

      // curr must be null now, pop from stack to get smallest num
      curr = stack.pop();
      i++;

      if (i === k) {
         return curr.val;
      }

      curr = curr.right;
   }

   // recursive solution
   // if (root === null) return 0;
   // let i = 0;

   // function findKth(node: TreeNode): number {
   //    let result = 0;
   //    if (node.left !== null) {
   //       result = findKth(node.left);
   //    }

   //    if (result > 0) {
   //       return result;
   //    }

   //    i++;
   //    if (i === k) {
   //       return node.val;
   //    }

   //    if (node.right !== null) {
   //       result = findKth(node.right);
   //    }

   //    return result;
   // }

   // return findKth(root);
}
// @lc code=end
