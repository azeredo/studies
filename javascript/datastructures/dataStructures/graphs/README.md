TuGraphs

Objectives
    Explain what a graph is
    Compare and contrast differente types of graphs and their use cases in the real world
    Implement a graph using an adjacency list
    Traverse through a graph using BFS and DFS
    Compare and contrast graph traversal algorithms

What are graphs?
    A graph data structure consist of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph

    Nodes + connections!

Uses for graphs
    Social network
    Location / Mapping
    Routing algorithms
    Visual hierarchy
    File system optimizations
    Everywhere!
    Recommendations
        People also watched
        You might also like
        People you migth know
        Frenquently bought with

Types of Graphs
    Vertex - a node
    Edge - connection between nodes
    Weighted/Unweighted - values assigned to distances between vertices
    Directed/Undirected - directions assigned to distanced between vertices

Adjacency Matrix
    Takes up more space (in sparse graphs)
    Slower to iterate over all edges
    Faster to lookup specfici edge
    Big O - |V| - number of vertices - |E| - number of edges
        Add Vertex O(|V^2|)
        Add Edge O(1)
        Remove Vertex O(|V^2|)
        Remove Edge O(1)
        Query O(1)
        Storage O(|V^2|)


Adjacency List
    Can take up less space (in sparse graphs)
    Faster to iterate over all edges
    Can be slower to lookup specific edge
    Big O - |V| - number of vertices - |E| - number of edges
        Add Vertex O(1)
        Add Edge O(1)
        Remove Vertex O(|V| + |E|)
        Remove Edge O(|E|)
        Query O(|V| + |E|)
        Storage O(|V| + |E|)

Methods
    Add vertex
    Add edge
    Remove edge
    Remove vertex

Add Vertex Strategy
    Write a method called addVertex, which accepts a name of a vertex
    It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array        

Add Edge Strategy    
    This function should accept two vertices, we can call them vertex1 and vertex2
    The function should find the adjancency list the key of vertex1 and push vertex2 to the array
    The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
    Don't worry about handling erros/invalid vertices for now

Remove Edge Strategy
    This function should accept two vertices, we'll call them vertex1 and vertex2
    The function should reassign the key of vertex1 to be an array that does not contain vertex2
    The function should reassign the key of vertex2 to ve an array that does not contain vertex1
    Don't worry about handling errors/invalide vertieces for now

Remove Vertex Strategy
    The function should accept a vertex to remove
    The funciotn should loop as long as there are any other vertices in the adjacency list for that vertex
    Inside of the loop, call our removeEdge function with the vertex we are removing and nay values in the adjacency list for that vertex
    Delete the key in the adjancency list for that vertex


Graph Traversal Uses
    Peer to peer networking
    Web crawlers
    Finding "closest" matches/recommendations
    Shortest path problems
        GPS navigation
        Solving mazes
        AI (shortest path to win the game)

DFS Strategy - Recursive
    The function should accept a starting node
    Create a list to store the end result, to ve returnd at the very end
    Create an object to store visited vertices
    Create a helper function which accepts a vertex
        The helper function should return early if the vertex is empty
        The helper function should place the vertex it accepts into the visited object and push that vertex into the result array
        Loop over all of the values in the adjacencyList for that vertex
        If any of those values have not benn visited, recursively invoke the helper funcion with that vertex
    Invoke the helper function with the starting vertex
    Return the result array

DFS Strategy - Iterative
    The function should accept a starting node
    Create a stack to help use keep track of vertices (use a list/array)
    Create a list to store the end result, to be returned at the very end
    Create an object to store visited vertices
    Add the starting vertex to the stack, and mark it visited
    While the stack has something in it
        Pop the next vertex from the stack
        If that vertex hasn't been visited yet
            Mark it as visited
            Add it to the result list
            Push all of its neighbors into the stack
    Return the result array

BFS Strategy
    This function should accept a starting vertex
    Create a queue (you can use an array) and place the starting vertex in it
    Create an array to store the nodes visited
    Create an object to store nodes visited
    Mark the starting vertex as visited
    Loop as long as there is anything in the queue
    Remove the first vertex from the queue and push it into the array that stores nodes visited
    Loop over each vertex in the adjacency list for the vertex you are visiting
    If it is no inside the object that stores nodes visited, mark it as visited and enqueue that vertex
    Once you have finished looping, return the array of visited nodes