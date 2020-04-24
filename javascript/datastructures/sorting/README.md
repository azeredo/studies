What is sorting?
    Sorting is the process of rearrangin the items in a collection so that the items are in some kind of order
Examples
    Sorting numbers from smallest to largest
    Sorting name alphabetically
    Sorting movies based on relase year
    Sorting movies based on revenue

Why do we need to learn this?
    Sorting is an incredibly common task, so it's good to know how its works
    There are many different ways to sort things, and different techniques have their own advantages and disadvantages  

Objectives
    Implement bubble sort
    Implement selection sort
    Implement insertion sort
    Understand why it is important to learn these simple sorting algorithms

JavaScript has a sort method, but it doesn't always work the way you expect
    order by unicode string (Array.prototype.sort())
    [6, 4, 15, 10].sort()
    // [10, 15, 4, 6]    

Telling JavavaScript how to sort
    The built-in sort method accepts an optional comparator function
    You can use this comparator function to tell JavaScript how you want it to sort
    The comparator looks at pairs of elements (a and b), determine their sort order based on the return value:
        If it returns a negative number, a should come before b
        It it returns a positive number, a should come after b
        If it returns 0, a and b are the same as far as the sort is concerned

function numberCompare(num1, num2) {
    return num1 - num2
}

function compareByLen(str1, str2) {
    return str1.length - str2.length
}

console.log([6,4,15,10].sort(numberCompare))

console.log(['Moises', 'Pedro', 'João', 'Alabama'].sort(compareByLen))

Before we sort, we must swap

Many sorting algorithms involve some type of swapping functionality (swapping to numbers to put them in order)

//ES5
function swap(arr, idx1, idx2) {}
    var temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}

//ES2015
function swap(arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2],arr[idx1]]
}

Big O
Bubble Sor, Insertion Sort and Selection Sort have "equal" performance
Time Complexity (best scenario) O(n), O(n), O(n²)
Time Complexity (average scenario) O(n²), O(n²), O(n²)
Time Complexity (worts scenario) O(n²), O(n²), O(n²)
Space Complexity O(n)