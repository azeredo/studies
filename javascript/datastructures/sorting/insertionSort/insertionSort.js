function insertionSort(arr) {
    let count = 0
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i]
        count++
        for (var j = i - 1; j > -1 && arr[j] > currentValue; j--) {
            arr[j + 1] = arr[j]
            count++
        }
        arr[j + 1] = currentValue    
    }
    console.log(`total iterations insertionSort ${count}`)
    return arr
}

console.log(insertionSort([5,3,1,8,690,23,-1]))
console.log(insertionSort([1,2,3,4,5,6,-1]))