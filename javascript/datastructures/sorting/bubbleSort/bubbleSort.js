function naiveBubbleSort(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        count++
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
            count++
        }
    }
    console.log(`total iterations naiveBubbleSort ${count}`)
    return arr
}

function bubbleSort(arr) {
    let count = 0
    for (let i = arr.length; i > 0; i--) {
        count++
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
            count++
        }
    }
    console.log(`total iterations bubbleSort ${count}`)
    return arr
}

function bubbleSortES2015(arr) {
    const swap = (arr, index1, index2) => {
        [arr[index1],arr[index2]] = [arr[index2],arr[index1]]
    }
    let count = 0
    for (let i = arr.length; i > 0; i--) {
        count++
        for (let j = 0; j < i - 1; j++) {
            swap(arr, j, j+ 1)
            count++
        }
    }
    console.log(`total iterations bubbleSortES2015 ${count}`)
    return arr
}

function bubbleSortLitteBetter(arr) {
    const swap = (arr, index1, index2) => {
        [arr[index1],arr[index2]] = [arr[index2],arr[index1]]
    }
    let noSwaps
    let count = 0
    for (let i = arr.length; i > 0; i--) {
        count++
        noSwaps = true
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j+ 1)
                noSwaps = false
            }
            count++
        }
        if (noSwaps) {
            break
        }
    }
    console.log(`total iterations bubbleSortLitteBetter ${count}`)
    return arr
}

console.log(naiveBubbleSort([5,3,1,8,690,23,-1]))
console.log(bubbleSort([5,3,1,8,690,23,-1]))
console.log(bubbleSortLitteBetter([5,3,1,8,690,23,-1]))

console.log(naiveBubbleSort([7,1,2,3,4,5,6,8,9]))
console.log(bubbleSort([7,1,2,3,4,5,6,8,9]))
console.log(bubbleSortLitteBetter([7,1,2,3,4,5,6,8,9]))
