
// empty linked list class
var MyLinkedList = function () {
  // linked list represeted by head pointer
  this.head = null;
  this.size = 0;
  this.tail = null;
};


/// create node class
var Node = function (val) {
  // new node creation
  this.val = val;
  this.next = null;
};



/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  // step 1 - traverse array
  // step  2 - return value at index if found else -1
  // edge cases if index < 0 or index >= size return -1 -- out of bounds

  if (index < 0 || index >= this.size) return -1;

  let curr = this.head;

  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }

  return curr.val;
};




/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {

  // step 1 - create new node
  // step 2 - point new node to head
  // step 3 - update head to new node
  // step 4 - if size is 0 update tail to new node
  // step 5 - increment size


  const newNode = new Node(val);

  newNode.next = this.head;
  this.head = newNode;

  if (this.size === 0) {
    this.tail = newNode;
  }

  this.size++;
};




/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  // step 1 - create new node
  // step 2 - if size is 0 update head and tail to new node
  // step 3 - else point tail next to new node and update tail to new node
  // step 4 - increment size

  let newNode = new Node(val);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.size++;
};




/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  // step 1 - create new node
  // step 2 - if index is 0 call addAtHead
  // step 3 - if index is size call addAtTail
  // step 4 - else traverse to index - 1
  // step 5 - point new node next to curr next
  // step 6 - point curr next to new node
  // step 7 - increment size

  const newNode = new Node(val);

  if (index < 0 || index > this.size) return;

  if (index === 0) {
    this.addAtHead(val);
    return;
  }

  if (index === this.size) {
    this.addAtTail(val);
    return;
  }

  let curr = this.head;
  for (let i = 0; i < index - 1; i++) {
    curr = curr.next;
  }

  newNode.next = curr.next;
  curr.next = newNode;
  this.size++;
};





/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {

    // step 1 - if index is out of bounds return
    // step 2 - if index is 0 update head to head next
    // step 3 - else traverse to index - 1
    // step 4 - point curr next to curr next next
    // step 5 - if index is size - 1 update tail to curr
    // step 6 - decrement size

  if (index < 0 || index >= this.size) return;

  let curr = this.head;

  if (index === 0) {
    this.head = curr.next;
    if (this.size == 1) {
      this.tail = curr.next;
    }
    this.size--;
    return;
  }

  for (let i = 0; i < index - 1; i++) {
    curr = curr.next;
  }

  curr.next = curr.next.next;

  if (index === this.size - 1) {
    this.tail = curr;
  }

  this.size--;
};




/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
