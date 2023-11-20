/*
 * @lc app=leetcode id=155 lang=typescript
 *
 * [155] Min Stack
 */

// @lc code=start
class MinStack {
   private stack: { value: number; min: number; next: any } | null = null;

   constructor() {
      this.stack = null;
   }

   push(val: number): void {
      if (this.stack == null) {
         this.stack = {
            value: val,
            min: val,
            next: null,
         };
      } else {
         this.stack = {
            value: val,
            min: Math.min(val, this.stack.min),
            next: this.stack,
         };
      }
   }

   pop(): void {
      if (this.stack !== null) {
         this.stack = this.stack.next;
      }
   }

   top(): number {
      return this.stack?.value!;
   }

   getMin(): number {
      return this.stack?.min!;
   }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
