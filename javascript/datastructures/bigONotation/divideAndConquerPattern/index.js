/*
This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data
This pattern can tremendously decrease time complexity
*/

/*
Given a sorted array of integers, write a function called search, that accepts a value and return the index where the value passed to the function is located.
If the value is not found, return -1
search([1,2,3,4,5,6], 4) // 3
*/

//Naive Solution
function search(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i
        }
    }

    return -1
}

//Refactor O(1) - Binary Search!
function search(arr, val) {
    let min = 0
    let max = arr.length - 1

    while (min <= max) {
        let middle = Math.floor((min + max) / 2)
        
        if (arr[middle] < val) {
            min = middle + 1
        } else if(arr[middle] > val) {
            max = middle -1
        } else {
            return middle
        }
    }

    return -1
}

console.log(search([1,2,3,4,5,6], 4))