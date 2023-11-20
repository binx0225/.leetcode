/*
 * @lc app=leetcode id=257 lang=typescript
 *
 * [257] Binary Tree Paths
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

function binaryTreePaths(root: TreeNode | null): string[] {
   if (root === null) return [];

   let answer: string[] = [];

   const stack: [TreeNode, string][] = [[root, `${root.val}`]];

   while (stack.length > 0) {
      const popped = stack.pop();

      if (!popped) continue; // Skip if undefined
      const [node, path] = popped;


      if (!node.left && !node.right) {
         answer.push(path);
      }

      if (node.right) stack.push([node.right, `${path}->${node.right.val}`]);
      if (node.left) stack.push([node.left, `${path}->${node.left.val}`]);
   }

   return answer;
}
// @lc code=end
