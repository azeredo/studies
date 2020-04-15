/*
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer
This function shoul return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function.
If there isn't one, return - instead
minSubArrayLen([2,3,1,2,4,3], 7) //2
minSubArrayLen([2,1,6,5,4],9) //2
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) //3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) //5
*/

function minSubArrayLen(arr1, sum) {
    let total = 0
    let start = 0
    let end = 0
    let minLen = Infinity

    while (start < arr1.length) {
        if (total < sum && end < arr1.length) {
            total += arr1[end]
            end++
        } else if (total >= sum) {
            minLen = Math.min(minLen, end - start)
            total -= arr1[start]
            start++
        } else {
            break
        }
    }
    return minLen === Infinity ? 0 : minLen
}

console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 55))

