# Linked List

A **linked list** is a linear data structure where each element is a separate object.

In its basic form, each node in a linked list contains two properties:

* **Data** - value of the node
* **Pointer or Link** - a reference to the next value in the tree (if one exists)

![](http://www.cs.usfca.edu/~srollins/courses/cs112-f08/web/notes/linkedlists/ll2.gif)
![](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/CPT-LinkedLists-addingnode.svg/1280px-CPT-LinkedLists-addingnode.svg.png)

When looking for a specific value in a linked list, you must traverse the list starting from the head, making comparisons to values stored in the nodes of each pointer. Based on the comparison, you either return the node once it is found, continue traversing, or return null if the node does not exist in the list.

From a speed perspective, each comparison allows the operations to skip about half of the tree. So each insertion or deletion takes time proportional to the logarithm of the number of items stored in the tree or in Big-O... O(log n). 

### Exercise Time!


[CLONE THIS](https://github.com/mlimberg/binary-search-tree)

Split into groups of 3 and we'll work through the implementation of a binary search tree! 

#### We will work on implementing the following methods:

* *INSERT* 
  * add a node to the tree in the correct position based on the root node
* *FIND*
  * find a specific value within the tree
* *MIN*
  * get the lowest value in the tree
* *MAX*
  * get the highest value in the tree
* *DELETE*
  * remove a node from the tree
  * what happens to any child nodes???_

 #### If time allows, others to implement include:
 
 * *toArray*
    * return an array of all nodes in the tree in the order of `[root, left nodes, right nodes]`
 * *SORT*
    * return an array of all nodes in the tree sorted from lowest to highest
 * *COUNT*
    * get the total count of nodes in the tree
 * *SUM*
    * get the sum of all nodes in the tree
 * *getLevel*
    * get the level of the node passed in, in relation to the root
