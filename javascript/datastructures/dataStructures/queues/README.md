Queues

Objectives
    Define what a queue is
    Understart use cases for a queue
    Implement operations on a queue data strcture

What is a queue?
    A FIFO data strucutre (First In First Out)

Where use?
    Background tasks
    Uploading resources
    Printing / Task processing

Methods
    Enqueue
    Dequeue

Enqueue Strategy
    This function accepts some value
    Create a new node using that value passed to the function
    If there are no nodes in the queue, set this node to be the first and last property fo the queue
    Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
    Increment the size of the queue by 1

Dequeue Strategy
    If there is no frist property, just return null
    Store the first property in a variable
    See if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null
    If there is more than 1 node, set the first property to be the next property of first
    Decrement the size by 1
    Return the value of the node dequeued

Big O
    Insertion - O(1)
    Removal - O(1)
    Searching - O(n)
    Access - O(n)