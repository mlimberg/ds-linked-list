import Node from './node'

export default class List {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(data) {
    const node = new Node(data)

    if (!this.head) {
      this.length++
      return this.head = node
    }

    let currentNode = this.head

    while (currentNode.next) {
      currentNode = currentNode.next
    }

    currentNode.next = node

    this.length++
  }

  pop() {
    let poppedNode;

    if (!this.head) {
      return null
    } else if (!this.head.next) {
      poppedNode = this.head
      this.head = null
    } else {
      poppedNode = this.getLast()
      let currentNode = this.head

      while (currentNode.next !== poppedNode) {
        currentNode = currentNode.next
      }

      currentNode.next = null
    }

    this.length--
    return poppedNode
  }

  getLast() {
    if (!this.head) {
      return null
    }

    if (!this.head.next) {
      return this.head
    }

    let currentNode = this.head

    while (currentNode.next) {
      currentNode = currentNode.next
    }

    return currentNode
  }

  delete(data) {
    if (!this.head) { return null }

    let nodeToDelete = this.find(data)
    let currentNode = null

    if (nodeToDelete) {
      if (nodeToDelete.data === this.head.data) {
        this.head = this.head.next ? this.head.next : null
      } else {
        currentNode = this.head

        while (currentNode.next.data !== data) {
          currentNode = currentNode.next
        }

        currentNode.next = nodeToDelete.next
      }
      this.length--
    }

    return nodeToDelete
  }

  find(data) {
    let currentNode = this.head
    let result = null

    while (currentNode) {
      if (currentNode.data === data) {
        result = currentNode
        currentNode = null
      } else {
        currentNode = currentNode.next
      }
    }

    return result
  }

  toArray() {
    const result = []
    let currentNode

    if (!this.head) { return result }
    if (!this.head.next) {
      result.push(this.head.data)
      return result
    } else {
      currentNode = this.head
    }


    while (currentNode) {
      result.push(currentNode.data)
      currentNode = currentNode.next
    }

    return result
  }

  include(data) {
    const node = this.find(data)

    return node ? true : false
  }

  index(data) {
    if (!this.find(data)) { return null }
    let index = 0;
    let currentNode = this.head || null

    while (currentNode) {
      if (currentNode.data === data) {
        currentNode = null
      } else {
        index++
        currentNode = currentNode.next
        console.log(currentNode);
      }
    }

    return index
  }

}
