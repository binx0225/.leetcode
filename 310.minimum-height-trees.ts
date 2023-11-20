/*
 * @lc app=leetcode id=310 lang=typescript
 *
 * [310] Minimum Height Trees
 */

// @lc code=start
function findMinHeightTrees(n: number, edges: number[][]): number[] {
   if (n === 1) return [0];
   if (n === 2) return [0, 1];

   // Initialize the graph
   let graph = new Map<number, Set<number>>();
   for (let [u, v] of edges) {
       if (!graph.has(u)) graph.set(u, new Set());
       if (!graph.has(v)) graph.set(v, new Set());
       graph.get(u)!.add(v);
       graph.get(v)!.add(u);
   }

   // Initialize leaves
   let leaves: number[] = [];
   for (let [node, neighbors] of graph) {
       if (neighbors.size === 1) {
           leaves.push(node);
       }
   }

   // Trim leaves iteratively
   while (n > 2) {
       n -= leaves.length;
       let newLeaves: number[] = [];
       for (let leaf of leaves) {
           let neighbor = Array.from(graph.get(leaf)!)[0];
           graph.get(neighbor)!.delete(leaf);
           if (graph.get(neighbor)!.size === 1) {
               newLeaves.push(neighbor);
           }
       }
       leaves = newLeaves;
   }

   return leaves;
}

// @lc code=end
