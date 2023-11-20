/*
 * @lc app=leetcode id=731 lang=typescript
 *
 * [731] My Calendar II
 */

// @lc code=start
class MyCalendarTwo {
   private singleBookings: [number, number][];
   private doubleBookings: [number, number][];

   constructor() {
      this.singleBookings = [];
      this.doubleBookings = [];
   }

   private overlaps(a: [number, number], b: [number, number]): boolean {
      return Math.max(a[0], b[0]) < Math.min(a[1], b[1]);
   }

   private getOverlap(
      a: [number, number],
      b: [number, number]
   ): [number, number] {
      return [Math.max(a[0], b[0]), Math.min(a[1], b[1])];
   }

   book(start: number, end: number): boolean {
      // Check for triple booking
      for (let booking of this.doubleBookings) {
         if (this.overlaps(booking, [start, end])) {
            return false; // Triple booking
         }
      }

      // Check for double booking and update double bookings
      for (let booking of this.singleBookings) {
         if (this.overlaps(booking, [start, end])) {
            this.doubleBookings.push(this.getOverlap(booking, [start, end]));
         }
      }

      // Add to single bookings
      this.singleBookings.push([start, end]);
      return true;
   }
}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */
// @lc code=end
