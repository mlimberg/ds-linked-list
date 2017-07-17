# Linked List

A **linked list** is a linear data structure where each element is a separate object.

In its basic form, each node in a linked list contains two properties:

* **Data** - value of the node
* **Pointer or Link** - a reference to the **next** node in the list (if one exists)



![](http://www.cs.usfca.edu/~srollins/courses/cs112-f08/web/notes/linkedlists/ll2.gif)



When looking for a specific value in a linked list, you must traverse the list starting from the head, making comparisons to values stored in the nodes of each pointer. Based on the comparison, you either return the node once it is found, continue traversing, or return null if the node does not exist in the list.

From a speed perspective, linked lists aren't very efficient because we need to start at the head with every operation and traverse potentially through the entire list before knowing whether we have the value we're looking for. However, it's great practice for your current project!

### Exercise Time!


[CLONE THIS](https://github.com/mlimberg/ds-linked-list)

Split into groups of 3 and we'll work through the implementation of a linked list! 

#### We will work on implementing the following methods:

* *PUSH* 
  * add a node to the end of the list
* *POP*
  * remove the last node in the list
* *FIND*
  * find a node within the list
* *LAST NODE*
  * return the last node in the list
* *DELETE*
  * remove a specific value from the list
* *TO ARRAY*
  * return an array of all values within the list in order
* *INCLUDES*
  * returns true or false if the node exists
* *INDEX*
  * returns the index of the submitted value within the list
* *INSERT*
  * place a node in the middle of the list
* *DISTANCE*
  * figure out the distance between two items in the list

