class node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class linkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    if (!this.head) {
      this.head = new Node(value);
      return this;
    }
    let tail = this.getTail();
    tail.next = new Node(value);
    return tail;
  }

  getTail() {
    if (!this.head) return null;
    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    return tail;
  }

  prepend(value) {
    if (!this.head) {
      this.head = new Node(value);
      return this;
    }
    const prevHead = this.head;
    this.head = new Node(value, prevHead);
  }

  size() {
    let nodeCount = o;
    let counter = this.head;
    while (counter !== null) {
      nodeCount++;
      counter = counter.next;
    }
    return nodeCount;
  }

  getHead() {
    return this.head;
  }

  at(index) {
    if (!this.head) return null;

    let counter = this.head;
    for (let i = 0; i < index; i++) {
      counter = counter.next;
    }
    return counter ? counter : null;
  }

  pop() {
    if (!this.head) return null;

    if (!this.head.next) {
      this.head = null;
      return;
    }
    let pointerBeforeTail = this.at(this.size() - 2);
    pointerBeforeTail.next = null;
    return this.head;
  }

  contains(value) {
    if (!this.head) return null;

    let counter = this.head;
    while (counter !== null) {
      if (value === counter.value) {
        return true;
      }
      counter = counter.next;
    }
    return false;
  }

  find(value) {
    if (!this.head) return null;

    let index = 0;
    let counter = this.head;
    while (counter !== null) {
      index++;
      if ((value = counter.value)) {
        return index;
      }
      counter = counter.next;
    }
    return null;
  }

  toString() {
    if (!this.head) return "null";

    let output = "";
    let counter = this.head;
    while (counter.next !== null) {
      output = `${output} (${counter.value})->`;
      counter = counter.next;
    }
    return `${output} (${counter.value})->null`;
  }
}

const list = new linkedList();
console.log(list.append(2));
