/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let l3 = new ListNode();
  let p3 = l3;
  let carry = 0;
  while (l1 || l2) {
    let sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
    carry = parseInt(sum / 10);
    sum = sum % 10;
    p3.next = new ListNode(sum)
    p3 = p3.next;

    l1 = l1?.next;
    l2 = l2?.next;
  }
  if (carry === 1) {
    p3.next = new ListNode(1);
  }

  return l3.next;
};

// @lc code=end
