// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

// Example 1:
// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]

// Example 2:
// Input: head = [], val = 1
// Output: []

// Example 3:
// Input: head = [7,7,7,7], val = 7
// Output: []

var removeElements = function (head, val) {


    // Create a sentinel node to handle edge cases
    // point sentinel's next to head
    // Initialize current pointer to sentinel
    // While current and current.next exist
        // If current.next.val equals val
            // Bypass the node by pointing current.next to current.next.next
        // Else
            // Move current to current.next
    // Return sentinel.next as the new head of the modified list

    const sentinel = new ListNode();

    sentinel.next = head;

    let curr = sentinel;


    while (curr && curr.next) {
        if (curr.next.val == val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }


    return sentinel.next;

};