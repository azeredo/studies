/*
This pattern involves creating a window which can either be an array or number from one position to another
Depending on a certain condition, the window either increases or closes (and a new window is created)
Very useful for keeping track of a subset of data in an array/string etc
*/

/*
Write a function called maxSubArraySum which accepts an array of integers and a number called n.
The function should calculate the maximum sum of n consecutive elements in the array
maxSubArraySum([1,2,5,2,8,1,5], 2) // 10
maxSubArraySum([1,2,5,2,8,1,5], 4) // 17
*/

// naive solution
function maxSubArraySum(arr, num) {
    if (num > arr.length) {
        return null        
    }

    var max = -Infinity
    for (let i = 0; i < arr.length; i++) {
        temp = 0
        for (let j = 0; j < num; j++) {
            temp += arr[i+j]
        }
        if (temp > max) {
            max = temp
        }
    }

    return max
}

//refactor
function maxSubArraySum(arr, num) {
    if (num > arr.length) {
        return null
    }

    let maxSum = 0
    let tempSum = 0

    //get first windown
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }

    tempSum = maxSum
    
    //navigate trough the next windows... 
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }

    return maxSum
}

console.log(maxSubArraySum([2,6,9,2,1,8,5,6,3], 5))