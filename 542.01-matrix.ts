/*
 * @lc app=leetcode id=542 lang=typescript
 *
 * [542] 01 Matrix
 */

// @lc code=start
function updateMatrix(mat: number[][]): number[][] {
   const m = mat.length;
   const n = mat[0].length;
   const queue: { i: number; j: number }[] = [];

   for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
         if (mat[i][j] === 0) {
            queue.push({ i, j });
         } else {
            mat[i][j] = -1;
         }
      }
   }

   while (queue.length > 0) {
      const pos = queue.shift();

      if (pos !== undefined) {
         // up
         if (pos.i - 1 >= 0 && mat[pos.i - 1][pos.j] === -1) {
            mat[pos.i - 1][pos.j] = mat[pos.i][pos.j] + 1;
            queue.push({ i: pos.i - 1, j: pos.j });
         }

         // down
         if (pos.i + 1 < m && mat[pos.i + 1][pos.j] === -1) {
            mat[pos.i + 1][pos.j] = mat[pos.i][pos.j] + 1;
            queue.push({ i: pos.i + 1, j: pos.j });
         }

         // left
         if (pos.j - 1 >= 0 && mat[pos.i][pos.j - 1] === -1) {
            mat[pos.i][pos.j - 1] = mat[pos.i][pos.j] + 1;
            queue.push({ i: pos.i, j: pos.j - 1 });
         }

         // right
         if (pos.j + 1 < n && mat[pos.i][pos.j + 1] === -1) {
            mat[pos.i][pos.j + 1] = mat[pos.i][pos.j] + 1;
            queue.push({ i: pos.i, j: pos.j + 1 });
         }
      }
   }

   return mat;
}
// @lc code=end

class TreeNode {
   val: number;
   left: TreeNode | null;
   right: TreeNode | null;
   constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
   }
}
function depthFirstValues(node: TreeNode): number[] {
   const stack = [node];
   const treeValues: number[] = [];

   while(stack.length > 0) {
      const node = stack.pop();

      if (node) treeValues.push(node.val);
      if (node?.right) stack.push(node.right);
      if (node?.left) stack.push(node.left);
   }

   return treeValues;
}
