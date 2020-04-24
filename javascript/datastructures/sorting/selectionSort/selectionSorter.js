function selectionSort(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        let lowest = i
        count++
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j
            }
            count++
        }
        if (i !== lowest) {
            let temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest] = temp
        }
    }
    console.log(`total iterations selectionSort ${count}`)
    return arr
}

function selectionSortES2015(arr) {
    const swap = (arr, index1, index2) => {
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
    }
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        let lowest = i
        count++
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j
            }
            count++
        }
        if (i !== lowest) {
            swap(arr, i, lowest)
        }
    }
    console.log(`total iterations selectionSortES2015 ${count}`)
    return arr
}

console.log(selectionSort([5,3,1,8,690,23,-1]))
console.log(selectionSortES2015([5,3,1,8,690,23,-1]))