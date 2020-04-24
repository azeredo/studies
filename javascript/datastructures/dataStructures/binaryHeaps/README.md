Binary Heaps

Objective
    Define what a binary heap is
    Compare and contrast min and max heaps
    Implement basic methods on heaps
    Understand where heaps are used in the real world and what other data structures can be constructed from heaps

What is a binary heap?
    Very similar to a binary search tree, but with some different rules
    In a MaxBinaryHeap, parent nodes are always larger than child nodes. Ina a MinBinaryHeap, parent node are always smaller than child nodes

Max Binary Heap
    Each parent has at most two child nodes
    The value of each node is always greater than its child nodes
    In a max binary heap the parant is grater than the children, but there are no guarantees between sibling nodes
    A binary heap is a compact as possible. All the children of each node are as full as they can be and left children are filled out first

Why do we need to know this?
    Binary heaps are used to implement priority queues, which are very commonly used data structures
    They are also used wuite a bit, with graph traversal algorithms

For any index of an array n the left child is store at 2n + 1 and the right child is at 2n + 2    --- show in array...
For nay child node at index n Its parent is at index floor((n-1) / 2)

Methods
    Insert
    Remove

Insert Strategy
    Push the value into the values property on the heap
    Bubble the value up to its correct spot
        Create a variable called index which is the length of the values property - 1
        Create a variable called parentIndex which is the flood of (index - 1) / 2
        Keep looping as long as the values element at the parentIndex is less than the values element at the child index
            Swap the value of the values element at the partenIndex with the value of the element proiperty at the child index
            Set the index to be the parentIndex, and start over

Remove Strategy
    Swap the first value in the values property with the last onde
    Pop from the values property, so you can return the values at the end
    Have the new root "sink down" to the correct spot
        Your parent index start at 0 (the root)
        Find the index of the left chid: 2 * index + 1 (make sure its not out of bounds)
        Find the index of the right child: 2 * index + 2 (make sure its not out of bound)
        If the left or right child is greater than the element then swap. If both left and right children are larger, swap with the largest child
        The child index you swapped to now becomes the new parent index
        Keep looping and swapping until neither child is larger tha the element
        Return the old root


Priority Queue
    A data structure where each element has a priority
    Elements with higher priorities are served before elements with loew priorities

    A naive version
        Use a list to store all elements
        Iterate over the entire thing to find the highest priority element

    Strategy
        Write a min binary heap - lower number means higher priority
        Each node has a value and a priority. Use the priority to build the heap
        Enqueue method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority
        Dequeue methods removes root element, returns it, and rearranges heap using priority


Big O
    Insertion - O(log n)
    Removal - O(log n)
    Search - O(n)