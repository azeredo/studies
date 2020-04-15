/*
Write a recursive function called someRecursive which accepts an array and a callback. The function return true if a single value in the array returns true when passed
to the callback. Otherwise it returns false
someRecursive([1,2,3,4], val => val > 0)
const isOdd = val => val % 2 != 00
comeRecursive([1,2,3,4], isOdd)
*/
function someRecursive(array, callback) {
    if (array.length === 0) {
        return false
    }
    if (callback(array[0])) {
        return true
    }
    return someRecursive(array.slice(1), callback)
}