Hash Tables

Objectives
    Explain what a hash table is
    Define what a hashing algorithm
    Discuss what makes a good hasing algorithm
    Understand how collisions occur in a hash table
    Handle collisions using separate chaining or lenar probing

What is a hash table?
    Hash tables are used to store key-value pairs
    They are like arrays, but the keys are not ordered
    Unlike arrays, hash tables are fast for all of the following operations:
        Finding values
        Adding new values
        Removing values

Why should I care?
    Nearly every programming language has some sort of hash table data structure
        Python has dictionaries
        Javascript has Objects and Maps
        Java, Go Scala have Maps
        Ruby has hashes...
    Because of their speed, hash tables are very commonly used        

The Hash Part
    To implement a hash table, we'll be using an array
    In order to look up values by key, we need a way to convert keys into valid array indices
    A function that performs this task is called a hash function    

What makes a good hash (not a cryptographically secure one)
    Fast
    Doesn't cluster outputs at specifci indices, but distributes uniformly
    Deterministic (same input yields same output)

Dealing with Collisions
    Even with a large array and a great hash function, collisions are inevitable
    There are manu strategies for dealing with collision, but we'll focus on two
        Separate Chaining
        Linear Probing

Separate Chaining
    With separate chaining, at each index in our array we store values using a more sophisticated data strucuture (an array or a linked list)
    This allows us to store multiple key-value pairs at the same index

Linear Probing
    With linear probing, when we find a collision, we search through the array to find the next empty slot
    Unlike with separate chaining, this allows us to store a single key-value at each index

Methods
    Set
    Get

Set Strategy
    Accepts a key and a value
    Hashes the key
    Stores the key-value pair in the hash table array via separate chaining

Get Strategy
    Accepts a key
    Hashes the key
    Retrieves the key-value pair in the hash table
    If the key isn't found, return undefined


Keys / Values
    Keys loops through the hash table array and returns an array of keys in the table
    Values loops through the hash table array and returns an array of values in the table


Big O
    Insert - O(1)
    Delet - O(1)
    Access - O(1)