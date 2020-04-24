function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

function digitCount(num) {
    if (num === 0) {
        return 1
    }
    return Math.floor(Math.log10(Math.abs(num))) + 1    
}

function mostDigits(nums) {
    let maxDigits = 0
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits
}

function radixSort(arr) {
    let maxDigitCount = mostDigits(arr)
    for (let n = 0; n < maxDigitCount; n++) {
        let digitBuckets = Array.from({length: 10}, () => [])
        for (let i = 0; i < arr.length; i++) {
            let digit = getDigit(arr[i], n)
            digitBuckets[digit].push(arr[i])
        }
        arr = [].concat(...digitBuckets)
    }
    console.log(arr)
    return arr
}

radixSort([3,1,67,0,13,6,2,88,5,12,31])