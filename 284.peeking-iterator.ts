/*
 * @lc app=leetcode id=284 lang=typescript
 *
 * [284] Peeking Iterator
 */

// @lc code=start
/**
 *  This is the Iterator's API interface.
 *  You should not implement it, or speculate about its implementation
 * class Iterator {
 *      hasNext(): boolean {}
 *
 *      next(): number {}
 * }
 */

class PeekingIterator {
   private iterator: Iterator;
   private nextValue: number | null;

   constructor(iterator: Iterator) {
      this.iterator = iterator;
      this.nextValue = this.iterator.next();
   }

   peek(): number | null {
      return this.nextValue;
   }

   next(): number | null {
      const currentElement = this.nextValue;
      if (this.iterator.hasNext()) {
         this.nextValue = this.iterator.next();
      } else {
         this.nextValue = null;
      }
      return currentElement;
   }

   hasNext(): boolean {
      return this.nextValue !== null;
   }
}

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(iterator)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
// @lc code=end
