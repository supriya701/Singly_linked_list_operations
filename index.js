//-------------write a code in javascript to print the list,insert at head,insert at middle and insert at end.-----------------------
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  printList() {
    let current = this.head;
    let result = [];
    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }
    console.log('Linked List:', result.join(' -> '));
  }

  insertAtHead(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAtMiddle(data, position) {
    if (position <= 0) {
      console.log('Invalid position');
      return;
    }

    const newNode = new Node(data);
    let current = this.head;
    let count = 1;

    while (current && count < position) {
      current = current.next;
      count++;
    }

    if (!current) {
      console.log('Invalid position');
      return;
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  insertAtEnd(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }
}

// Example usage:

const linkedList = new LinkedList();
linkedList.insertAtHead(3);
linkedList.insertAtHead(2);
linkedList.insertAtHead(1);

linkedList.printList(); // Linked List: 1 -> 2 -> 3

linkedList.insertAtEnd(4);

linkedList.printList(); // Linked List: 1 -> 2 -> 3 -> 4

linkedList.insertAtMiddle(9, 2);

linkedList.printList(); // Linked List: 1 -> 9 -> 2 -> 3 -> 4
