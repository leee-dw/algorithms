/*
    Find merge point of two linked lists
    Note that the head may be 'null' for the empty list.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function findMergeNode(headA, headB) {
  console.log("headA.next: ", headA.next);
  console.log("headA: ", headA);
}


`headA.next:  Node {
  data: 4,
  next: Node { data: 3, next: Node { data: 5, next: [Object] } } }
headA:  Node {
  data: 2,
  next: Node { data: 4, next: Node { data: 3, next: [Object] } } }
`

`
headA.next:  Node {
  data: 4,
  next: Node { data: 3, next: Node { data: 7, next: null } } }

headA:  Node {
  data: 2,
  next: Node { data: 4, next: Node { data: 3, next: [Object] } } }
`

`
headA.next:  Node { data: 4, next: Node { data: 7, next: null } }

headA:  Node {
  data: 2,
  next: Node { data: 4, next: Node { data: 7, next: null } } }
`