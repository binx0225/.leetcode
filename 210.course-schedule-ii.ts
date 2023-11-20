/*
 * @lc app=leetcode id=210 lang=typescript
 *
 * [210] Course Schedule II
 */

// @lc code=start
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
   if (prerequisites.length === 0 && numCourses === 1) return [0];
   const orderList: number[] = [];
   const courseMap = buildCourseMap(prerequisites);
   const cycleSet = new Set<number>();
   const visitedSet = new Set<number>();

   for (let i = 0; i < numCourses; i++) {
      if (dfs(i, orderList) === false) return [];
   }

   return orderList;

   function dfs(course: number, orderList: number[]): boolean {
      if (visitedSet.has(course)) return true;
      if (cycleSet.has(course)) return false;

      cycleSet.add(course);
      if (courseMap[course]) {
         for (let pre of courseMap[course]) {
            if (dfs(pre, orderList) === false) return false;
         }
      }
      orderList.push(course);
      visitedSet.add(course);
      cycleSet.delete(course);
      return true;
   }

   function buildCourseMap(prerequisites: number[][]): {
      [course: number]: number[];
   } {
      let courseMap: { [course: number]: number[] } = {};

      for (let [course, pre] of prerequisites) {
         if (!(course in courseMap)) courseMap[course] = [];
         if (!(pre in courseMap)) courseMap[pre] = [];
         courseMap[course].push(pre);
      }

      return courseMap;
   }
}
// @lc code=end
