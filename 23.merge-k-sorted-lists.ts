/*
 * @lc app=leetcode id=23 lang=typescript
 *
 * [23] Merge k Sorted Lists
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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
   if (lists.length === 0) return null;
   const dummyNode = new ListNode();
   const sortedList: Array<ListNode> = [];

   for (let root of lists) {
      if (root) {
         sortedList.push(root);
         let curr = root.next;
         while (curr) {
            sortedList.push(curr);
            curr = curr.next;
         }
      }
   }

   sortedList.sort((a, b) => a.val - b.val);

   let current = dummyNode;
   for (let node of sortedList) {
      current.next = node;
      current = current.next;
   }

   return dummyNode.next;
}
// @lc code=end
