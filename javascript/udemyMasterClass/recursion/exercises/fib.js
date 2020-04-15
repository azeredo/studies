/*
Write a recursive function called fib which accepts a number and return the nth number in the Fibonnacci sequence. Recall that the Fibonacci sequence is the sequence of
whole numbers 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers
*/

function fib(num) {    
    if (num < 3) {
        return 1
    }    

    return fib(num - 1) + fib(num - 2)
}