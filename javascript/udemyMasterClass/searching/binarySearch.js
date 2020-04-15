/*
Binary search is a much faster form of serach
Rather than eliminating one element at a time, you can eliminate half of the remaingin elements at the time
Only works on sorted arrays

Divide and Conquer

Let's search for 15:
[1,3,4,6,8,9,11,12,15,16,17,18,19]

This function accepts a sorted array and a value
Create a left pointer at the start of the array, and a right pointer at the end of the array
While the left pointer comes before the right pointer:
    Create a pointer in the middle
    If you find the value you want, return the index
    If the value is too small, move the left pointer up
    If the value is too large, move the rigth pointer down
If you never find the value, return -1
*/

function binarySearch(array, value) {
    let start = 0
    let end = array.length - 1
    let middle = Math.floor((start + end) / 2)
    while (start <= end) {                        
        if (array[middle] === value) {
            return middle
        } else if (array[middle] > value) {
            end--
        } else {
            start++
        }
        middle = Math.floor((start + end) / 2)
    }
    return -1
}

console.log(binarySearch([1,3,4,6,8,9,11,12,15,16,17,18,19], 19))