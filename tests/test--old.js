// const { assert, expect } = require('chai')
// const Node = require('../node')
// const LinkedList = require('../LinkedList')
//
// describe('node', () => {
//
//   it('should be a thing', () => {
//     const node = new Node('data', 'next')
//     expect(node).to.exist
//   })
//
//   it('should accept two arguments for data and next', () => {
//     const value = { data: 'data', next: 'next'}
//     const node = new Node(value)
//     expect(node.data).to.equal('data')
//     expect(node.next).to.equal('next')
//   })
//
// })
//
// describe('linked list', () => {
//   let linkedList;
//
//   beforeEach(() => {
//     linkedList = new LinkedList()
//   })
//
//   it('should exist', () => {
//     expect(linkedList).to.exist
//   })
//
//   it('should be able to have a first node added', () => {
//     const value = { data: 1, next: null }
//     linkedList.add(value)
//
//     expect(linkedList.head.data).to.equal(1)
//   })
//
//   it('should add the node to the end if a head already exists', () => {
//     const value1 = { data: 1, next: null }
//     linkedList.add(value1)
//     const value2 = { data: 2, next: null }
//     linkedList.add(value2)
//
//   })
//
//   it('should pop the first list item if pop is called', () => {
//     const value1 = { data: 1, next: null }
//     linkedList.add(value1)
//
//     const value2 = { data: 2, next: null }
//     linkedList.add(value2)
//
//     const value3 = { data: 3, next: null }
//     linkedList.add(value3)
//
//     linkedList.pop()
//
//   })
//
//   it('can handle an indefinite amount of nodes', () => {
//     for(let i = 1; i <= 100; i++) {
//       let value = { data: i, next: null }
//       linkedList.add(value)
//     }
//
//     expect(linkedList.length).to.equal(100)
//   })
//
//   it('can remove a node at a given index', () => {
//     for(let i = 1; i <= 10; i++) {
//       let value = { data: i, next: null }
//       linkedList.add(value)
//     }
//
//     linkedList.remove(3)
//
//     expect(linkedList.head.next.next.data).to.equal(4)
//   })
// })
