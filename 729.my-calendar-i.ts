/*
 * @lc app=leetcode id=729 lang=typescript
 *
 * [729] My Calendar I
 */

// @lc code=start
class MyCalendar {
   bookings: number[][];
   constructor() {
      this.bookings = [];
   }

   private isOverlapping(
      start: number,
      end: number,
      bookingStart: number,
      bookingEnd: number
   ): boolean {
      // Check if [start, end) overlaps with [bookingStart, bookingEnd)
      return Math.max(start, bookingStart) < Math.min(end, bookingEnd);
   }

   book(start: number, end: number): boolean {
      for (const [bookingStart, bookingEnd] of this.bookings) {
         if (this.isOverlapping(start, end, bookingStart, bookingEnd)) {
            return false;
         }
      }
      this.bookings.push([start, end]);
      return true;
   }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
// @lc code=end
