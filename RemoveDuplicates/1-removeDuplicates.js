// OPTIMIZED APPROACH

/*
EDGE:
- null vals

BRUTE FORCE APPROACH:
- Recursion? or Pointer?
- While loop (this.value === this.next.value)
  - Compare this.value to this.next.value
  - If it's a duplicate, this.next = this.next.next.value

OPTIMIZED APPROACH:
- Set pointer = linkedList (pointing to head)
- pointer.value = 1 (head)
- Compare this.value to this.next.value
  - If it's a duplicate, this.next = this.next.next.value

*/

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  let pointer = linkedList;

  while (pointer.next) {
    if (pointer.value === pointer.next.value) {
      pointer.next = pointer.next.next;
    } else {
      pointer = pointer.next;
    }
  }
  return linkedList;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
