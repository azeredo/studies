/*
Crating pointers or values that correspond to an index or postion and move towards the beginning, end or middle based on a certain condition
Very efficient for solving problems with minimal space complexity as well
*/

/*
Write a function called sumZero which accpets a sorted array of integers. The function shild find the first pair where the sum is 0.
Return an array that includes boths values that sum to zero or undefined if a pair does not exists
sumZero([-3,-2,-1-,0,1,2,3]) [-3,3]
sumZero([-2,0,1,3]) // undefined
*/
//Naive solution (time O(n²) - space O(1))
function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]
            }
        }
    }
    return undefined
}

//Refactor (time/space - O(1))
function sumZero(arr) {
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === 0) {
            return [arr[left], arr[right]]            
        } else if (sum > 0) {
            right--
        } else {
            left++
        }
    }
    return undefined
}

console.log(sumZero([-4,-3,-2,-1,0,1,2,3,10]))