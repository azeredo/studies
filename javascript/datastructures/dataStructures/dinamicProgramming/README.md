Dinamic Programming

Make sure you're ok with recursion

Objectives
    Define what dynamic programming is
    Explain what overlapping subproblems are
    Understand what optimal substructure is
    Solve more challenging problems using dynamic programming

What is Dynamic Programming?
    A method for solving complex problem by breaking it down int a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions

It only works on problems with
    Optimal substrucutre
    Overlapping subproblems

Overlapping subproblems
    A problem is said to have overlapping subproblems if it can be broken down into subproblems which are reusued several times

Optimal Substructure
    A problem is said to have optimal substructure if an optimal solution can be construcuted from optimal solutions of its subproblems

Memoization
    Storing the results of expensive function calls and returning the cached result when the same inputs occur again

Tabulation
    Storing the result of a previous result in a "table" (usually an array)
    Usually done using iteration
    Better space complexity cab be achieved using tabulation