Stacks

Objectives
    Define what a stack is
    Understand use cases for a stack
    Implement operations on a stack data structure

What is a stack?
    A LIFO data strucutre
    The last element added to the stack will be the first element removed from the stack

How is it used?
    Think about a stack of plates, or a stack of markres, or a stack of anything
    As you pile it up the last thing (or the topmost thing) is what gets removed first    

We've seen before
    Callstacks! (recursion)

Where stacks are used?
    Managing function invocations
    Undo / Redo
    Routing (the history object) is trated like a stack

Methods
    Push - Add a value to the top of the stack
    Pop - remove a valut to the top of the stack

Push Strategy
    The function should accept a value
    Create a new node with that value
    If there are no nodes in the stack, set the first and last property to be the newly created node
    If there is at least one node, create a variable that stores the current first property on the stack
    Reset the frist property to be the newly created node
    Set the next property on the node to be the previously created variable
    Increment the size of the stack by 1

Pop Strategy
    If thre are no nodes in the stack, return null
    Create a temporary variable to store the first property on the stack
    If there is only 1 node, set the first and last property to be null
    If there is more than onde node, set the first property to be the next property of the current first
    Decrement the size by 1
    Return the value of the node removed

Big O
    Insertion - O(1)
    Removal - O(1)
    Searching - O(n)
    Access - O(n)