const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null
    this.last = null
    this.length = 0
  }

  add(value) {
    const node = new Node(value);
    if(!this.head){
       this.head = node
       this.last = node
    } else {
       this.last.next = node
       this.last = node
    }
    this.length++
   }

   pop() {
     this.head = this.head.next
     this.length--
   }

   remove(index) {
     if(index > this.length) { return }
     if(index === 1) {
       this.length--
       return this.pop()
     } else {
       let prevNode;
       let currentNode = this.head
       let count = 1
       while(count < index) {
         prevNode = currentNode
         currentNode = currentNode.next
         count++
       }
       prevNode.next = currentNode.next
     }
   }


}

module.exports = LinkedList;
