Trees

Objectives
    Define what a tree is
    Compare and contrast trees and lists
    Explain the difference between trees, binary trees, and binary search trees
    Implement operations on binary search trees

What is a tree?
    A data structure that consists of nodes in a parent / child relationship

Lists - Linear
Trees - nonlinear

Terminology
    Root - The top node in a tree
    Child - A node directly connected to another node when moving away from the root
    Parent - The converse notion of a child
    Siblings - A group of nodes with the same parent
    Leaf - A node with no children
    Edge - The connection between one node and another

Applications    
    HTML DOM
    Network Routing
    Abstract Syntax Tree
    Artificial Intelligence / Machine Learning
    Folders in operating systems
    Computer file systems
    JSON

Kinds of Trees
    Trees
    Binary Trees
    Binary Search Trees

Binary Search Trees (BST)
    Every parent node has at most two children (binary!)
    Every node to the left of a paretn node is always less than the parent
    Every node to the right of a parent node is always greater than the parent

Methods
    Insert
    Find

Insert Strategy
    Create a new node
    Starting at the root
    Check if there is a root, if not - the root now becomes that new node
    If there is a root, check if the value of the new node is greater than or less than the value of the root
    If it is grater
        Check to see if there is a node to the right
            If there is, move to that node and repeat these steps
            If there is not, add that node as the right property
    If it is less
        Check to see if there is a node to the left
            If there is, move to that node and repeat these steps
            If there is not, add that node as the left property

Find Strategy
    Starting at the root
        Check if there is a root, if not - we're done searching
        If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done
        If not, check to see if the value is greater than or less than the value fo the root
        If it is greater
            Check to see if there is a node to the right
            If there is, move to that node and repeat there steps
            If there is not, we're done searching
        If it is less
            Check to see if there is a node to the left
                If there is, move to that node and repeat these steps
                If there is not, we're done searching        

Big O ---- caution with this tree is a linked list
    Insertion - O(log n)
    Searching - O(log n)

Tree Traversal

No ordered, need to visit one node once

Traversing a tree
    Breadth-first Search
    Depth-first Search

Breadth First Search (BFS)
    Looking line by line (horinzontally)

Depth First Search (DFS)
    Looking vertically
        InOrder (bottom left to top)
        PreOrder (top left to bottom)
        PostOrder (bottom left to top - finishing this side, go to the same level on right)

BFS Strategy
    Create a queue (this can be an array) and a variable to store the values of nodes visited
    Place the root node in the queue
    Loop as logn as there is anything in the queue
        Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
        If there is a left property on the node dequeued - add it to the queue
        If there is a right property on the node dequeued - add it to the queue
    Return the variable that stores the values

DFS - PreOrder Strategy
    Create a variable to store the values of nodes visited
    Store the root of the BST in a variable called current
    Write a helper function which accepts a node
        Push the values of the node to the variable that stores the values
        If the node has a left property, call the helper function with the left property on the node
        If the node has a right property, call the helper function with the rigth property on the node
    Invoke the helper function with the current variable
    Return the array of values

DFS - PostOrder Strategy
    Create a variable to store the values of nodes visited
    Store the root of the BST in a variable called current
    Write a helper function which accepts a node
        If the node has a left property, call the help function with the left property on the node
        If the node has a rigth property, call the help function with the right property on the node
        Push the values of the node to the varable that stores the values
        Invoke the helper function with the current variable
    Return the array of values

DFS - InOrder Strategy
    Create a variable to store the values of nodes visited
    Store the root of the BST in a variable called current
    Write a helper function which accepts a node
        If the node has a left property, call the helper function with the left property on the node
        Push the values of the node to the varable that stores the values
        If the node has a right property, call the helper function with the rigth property on the node
    Invoke the helper function with the current variable
    Return the array of value