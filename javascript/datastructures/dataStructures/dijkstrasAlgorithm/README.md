Dijkstra's Algorithm

Objectives
    Understand the importance of Dijkstra's
    Implement a Weighted Graph
    Walk through the steps of Dijkstra's
    Implement Dijkstra's using a naive priority queue
    Implement Dijkstra's using a binary heap priority queue


What is it?
    Onde of the most famous and widely used algorithms around
    Finds the shortest path between two vertices ona graph
    What's the fastest way to get from point A to point B?

Why is it useful?
    GPS - finding fastes route
    Network Routing - finds open shortest path for data
    Biology - used to model the spread of viruses among humans
    Airline tickets - finding cheapest route to your destination
    etc

The approach
    Every tiem we look to visit a new node, we pick the node with the smalles known distance to visit first
    Once we've moved to the node we're going to visit, we look at each of tis neighbors
    For each neighboring node, we calculate the distance by summing the total edges that lead to the node we're checking from the starting node
    If the new total distance to a node is less than the previous total, we store the new shortet distance for that node

Strategy
    This function should accept a starting and ending vertex
    Create an object (we'll call it distances) and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0
    After setting avalue in the distances object, add each vertex with a priority of infinity to the priority queue, except the starting vertex, which should have a priority of 0 because that's where we begin
    Create another object called previous and set each key to be every vertex in the adjacency list with a value of null
    Start looping as long as there is anything in the priority queue
        Dequeue a vertex from the priority queue
        If that vertex is the same as the ending vertex - we are done
        Otherwise loop through each value in the adjacency list at that vertex
            Calculate the distance to that vertex from the starting vertex
            If the distacne is less than what is currently stored in our distances object
                Update the distances object with new lower distance
                Update the previous object to contain that vertex
                Enqueue the vertex with the total distance from the start node