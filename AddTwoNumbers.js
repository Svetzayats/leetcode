/**
 * https://leetcode.com/problems/add-two-numbers/description/
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
    let point1 = l1;
    let point2 = l2;
    let prev = 0;
    let res;
    let head;

    while (point1 || point2) {
        const { val, cur } = add(point1, point2, prev);
        prev = cur;
        if (res) {
            res.next = new ListNode(val);
            res = res.next;
        } else {
            res = new ListNode(val);
            head = res;
        }
        point1 = point1?.next;
        point2 = point2?.next;
    }

    if (prev > 0) {
        res.next = new ListNode(prev, null);
    }

    return head;
}

function add(node1, node2, prev) {
    const sum = (node1?.val || 0) + (node2?.val || 0) + prev;
    if (sum > 9) {
        return {
            cur: 1,
            val: sum % 10
        };
    } else {
        return {
            cur: 0,
            val: sum
        };
    }
}
