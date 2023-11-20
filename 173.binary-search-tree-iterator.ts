/*
 * @lc app=leetcode id=173 lang=typescript
 *
 * [173] Binary Search Tree Iterator
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

class BSTIterator {
   queue: TreeNode[] = [];

   constructor(root: TreeNode | null) {
      if (root !== null) {
         this.push(root);
      }
   }

   push(node: TreeNode) {
      if (node.right !== null) {
         this.push(node.right);
      }

      this.queue.push(node);

      if (node.left !== null) {
         this.push(node.left);
      }
   }

   next(): number {
      const node = this.queue.pop();
      return node?.val ? node.val : 0;
   }

   hasNext(): boolean {
      return this.queue.length > 0;
   }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end
