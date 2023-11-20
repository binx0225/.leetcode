/*
 * @lc app=leetcode id=133 lang=typescript
 *
 * [133] Clone Graph
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

function cloneGraph(node: Node | null): Node | null {
   if (node === null) return null;

   const hashMap = new Map<Node, Node>();

   function dfs(n: Node | null): Node | null {
      if (hashMap.has(n)) {
         return hashMap.get(n);
      }

      const cloneN = new Node(n.val);
      hashMap.set(n, cloneN);

      for (const nei of n.neighbors) {
         cloneN.neighbors.push(dfs(nei));
      }
      return cloneN;
   }

   return dfs(node);
}

// @lc code=end
