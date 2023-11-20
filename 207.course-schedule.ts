/*
 * @lc app=leetcode id=207 lang=typescript
 *
 * [207] Course Schedule
 */

// @lc code=start
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
   let courseList = buildCourseList(prerequisites);
   const visited = new Set<number>();
   let count = 0;

   for (let course in courseList) {
      if (dfs(parseInt(course)) === false) return false;
   }

   return true;

   function dfs(course: number): boolean {
      if (visited.has(course)) return false;
      if (courseList[course].length === 0) return true;

      visited.add(course);

      for (let pre of courseList[course]) {
         if (dfs(pre) === false) return false;
      }
      visited.delete(course);
      courseList[course] = [];
      return true;
   }

   function buildCourseList(prerequisites: number[][]): {
      [key: number]: number[];
   } {
      let courseList: { [key: number]: number[] } = {};

      for (let [course, preCouse] of prerequisites) {
         if (course in courseList) {
            courseList[course].push(preCouse);
         } else {
            courseList[course] = [preCouse];
         }

         if (!(preCouse in courseList)) {
            courseList[preCouse] = [];
         }
      }
      return courseList;
   }

   return false;
}
// @lc code=end
