/*
 * @lc app=leetcode id=143 lang=typescript
 *
 * [143] Reorder List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
   if (head === null) return;


   const hashMap = new Map<number, ListNode>();
   let index = 0;
   let curr = head;
   while (curr !== null) {
      hashMap.set(index, curr);
      index++;
   }


   for (let i = 0; i <= index; i++) {
      
   }



    
};
// @lc code=end

