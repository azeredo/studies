/*
Objectives:
    Motivate the need for something like Big O Notation
    Describe what Big O Notation is
    Simplify Big O Expressions
    Define "ttime complexity" and "space complexity"
    Evaluate the time complexity and space complexity of different algorithms using Big O Notation
    Describe what a logarithm is

Who cares?
    It's important to have a precise vocabulary to talk aobut how our code performs
    Useful for discussing trade-offs between different approaches
    When your code slows down or crashes, identifying parts of the code thar are inefficient can help us find pain points in our applications

An Example
    Suppose we want to write a function that calculates the sum of all number from 1 up to (and including) some number n    
*/

function addUpTo(n) {
    let total = 0
    for (let i = 1; i <= n; i++) {
        total += i
    }
    return total
}

function  addUpTo2(n) {
    return n * (n + 1) / 2
}

/*
Which one is better?
What does better mean?
    Faster?
    Less memory-intensive?
    More readable?
*/
const { performance } = require('perf_hooks');

let t1 = performance.now()
addUpTo(1000)
let t2 = performance.now()
console.log(`Time Elapsed1: ${(t2 - t1) / 1000} seconds`)


t1 = performance.now()
addUpTo2(1000)
t2 = performance.now()
console.log(`Time Elapsed2: ${(t2 - t1) / 1000} seconds`)

/*
The problem with time
    Different machines will record different times
    The same machine will record different times
    For fast algorithms, speed measurements may not be precise enough?

Couting Operations
    function  addUpTo2(n) {
        return n * (n + 1) / 2
    }
    3 simple operations, regardless fo the size of n (1 mutiplication, 1 addition, 1 division)

    function addUpTo(n) {
        let total = 0
        for (let i = 1; i <= n; i++) {
            total += i
        }
        return total
    }
    Depending on what whe count, the number of operations can be as low as 2n or as high as 5n + 2
    But regardless of the exact number, the number of operations grows roughly proportonally with n (
        1 assignment ( total = 0)
        n additions and assignments (total += i)        
        1 assignment (i = 1)
        n comparison (i <= n)
        n additions and assignments (i++)
    )

Introducing Big O
        Big O Notation is a way to formalize fuzzy counting
        It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow

Big O Definition   
    We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant time f(n), as n increases
        f(n) could be linear (f(n) = n)        
        f(n) could be quadratic (f(n) = n²)
        f(n) could be constant (f(n) = 1)
        f(n) could be something entirely different

Simplifying Big O Expressions
        When determining the time complexity of an algorithm, there are some helpful rule of thumbs for big O expressions
        These rulse os thumb are consequences of the definition of big O notation

Constants Don't Matter
    O(2n) => O(n)
    O(500) => O(1)
    O(12n²) => O(n²)        

Smaller Terms Don't Matter
        O(n + 10) => O(n)
        O(1000n + 50) => O(n)
        O(n² + 5n + 8) => O(n²)

Big O Shorthands
    Analyzing complexity with big O can get complicated
    There are several rules of thumb that can help
    These rules won't ALWAYS work, but are a helpful startin point       
    
    1 - Arithmetic operations are constant
    2 - Variable assignment is constant
    3 - Accessing elements in an array (by index) or object (by key) is constant
    4 - In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop
*/
function logAtLeast5(n) {
    for (var i = 1; i <= Math.max(5, n); i++) {
        console.log(i)
    }
}
logAtLeast5(10)

function logAtLeast52(n) {
    for (var i = 1; i <= Math.min(5, n); i++) {
        console.log(i)
    }
}
logAtLeast52(10)

/*
Space Complexity
    So far, we've been focusin on time complexity: how can we analyze the runtime of an algorithm as the size of the inputs increases?
    We can also use big O notation to analyze space complexity: how much additional memory do we need to allocate in order to run the code in our algorithm?
What about the inputs?
    Sometimes you'll hear the term auxiliary space complexity to refer to space required by the algorithm, not including space taken up by the inputs
Space Complexity in JS
    Most primitives (booleans, number, undefined, null) are constant space
    Strings require O(n) space (where n is the string lenght)
    Reference types are generally O(n), where n is the length(for arrays) or the number of keys (for objects)

Logarithms
    We've encountered come of the most commom complexities: O(1), O(n), O(n²)
    Sometimes big O expressions involve more complex mathematical expressions
    One that appears more often than you might like is the logarithm    

Logarithm Complexity O(n²) > O(nlog n) > O(n) > O(log n) > O(1) 


    Certain searching algorithms have logarithmic time complexity
    Efficient sorting algorithms involve logarithms
    Recursions sometimes involve logarithmic space complexity
*/

/*
RECAP
    To analyze the perfomance of an alogrithm, we use Big O Notation
    Big O Notation can give us a high level understanding of the time or space complexity of an alorithm
    Big O Notation doesn't care about precision, only about general trands (lenar, quadratic, constant)
    The time or space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm
    Big O Notation is everywhere, so get lots of practice
*/
