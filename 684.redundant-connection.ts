/*
 * @lc app=leetcode id=684 lang=typescript
 *
 * [684] Redundant Connection
 */

// @lc code=start
function findRedundantConnection(edges: number[][]): number[] {
   const parent: number[] = [];
   const rank: number[] = [];
   for (let i = 0; i <= edges.length; i++) {
      parent.push(i);
      rank.push(1);
   }

   console.log(parent);

   for (let [n1, n2] of edges) {
      if (union(n1, n2) === false) return [n1, n2];
   }

   function findAncestor(n: number): number {
      let p = parent[n];
      while (p !== parent[p]) {
         parent[p] = parent[parent[p]];
         p = parent[p];
      }

      return p;
   }

   function union(n1: number, n2: number): boolean {
      const p1 = findAncestor(n1);
      const p2 = findAncestor(n2);

      if (p1 === p2) return false;

      if (rank[p1] > rank[p2]) {
         // set edge[0] as parent of edge[1]
         parent[p2] = p1;
         rank[p1] += rank[p2];
      } else {
         parent[p1] = p2;
         rank[p2] += rank[p1];
      }
      return true;
   }
}
// @lc code=end
