/*
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
There can be negative number in the array, but it will always be sorted
countUniqueValues([1,2,1,1,1,2]) // 2
countUniqueValues([-2,-1,-1,0,1]) // 4
*/
function countUniqueValues(arr) {
    let aux = []
    for (let value of arr) {        
        if (aux.indexOf(value) === -1) {
            aux.push(value)
        }
    }

    return aux.length
}

//refactor
function countUniqueValues(arr) {
    if (arr.length === 0) {
        return 0
    }
    let i = 0
    let j = i + 1
    while (j < arr.length) {
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]            
        }
        j++        
    }
    return i + 1
}


console.log(countUniqueValues([1,1,2,3,3,4,5,6,6,7]))