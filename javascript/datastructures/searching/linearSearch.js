/*
Given an array, the simplest way to search for an value is to llok at every in the array and check if it's the value we want
indexOf
includes
find
findIndex
*/
function search(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i
        }
    }
    return -1
}