function pivot(arr, start =0, end = arr.length + 1) {
    const swap = (arr, index1, index2) => {
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
    }
    let pivot = arr[start]
    let swapIndex = start

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIndex++
            swap(arr, swapIndex, i)
        }
    }
    swap(arr, start, swapIndex)
    return swapIndex
}

pivot([4,8,2,1,5,7,6,3])

function quickSort(arr, left = 0, rigth = arr.length -1) {
    if (left < rigth) {
        let pivotIndex = pivot(arr, left, rigth)    
        quickSort(arr, left, pivotIndex - 1) //left
        quickSort(arr, pivotIndex + 1, rigth) //rigth
    }
    return arr
}

console.log(quickSort([8,-8,2,1,5,7,6,3]))