function getMean(array) {
    let sum = 0
    array.forEach(element => {
        sum += element
    });
    return sum / array.length
}

function getMedian(array) {
    array.sort(function(a, b) { return a - b})
    let median

    if (array.length % 2 !== 0) {
        median = array[Math.floor(array.length / 2)]
    } else {
        let mid1 = array[(array.length / 2) - 1]
        let mid2 = array[(array.length / 2)]
        median = (mid1 + mid2) / 2
    }
    return median
}

function getMode(array) {
    let modeObj = {}

    array.forEach(num => {
        if (!modeObj[num]) {
            modeObj[num] = 0
        }
        modeObj[num]++
    })

    let maxFrequency = 0
    let modes = []
    for (var num in modeObj) {
        if (modeObj[num] > maxFrequency) {
            modes = [num]
            maxFrequency = modeObj[num]
        } else if (modeObj[num] === maxFrequency) {
            modes.push(num)
        }
    }

    if (modes.length === Object.keys(modeObj).length) {
        modes = []
    }

    return modes
}


function meanMedianMode(array) {
    return {
        mean: getMean(array),
        median: getMedian(array),
        mode: getMode(array)
    }
}


console.log(meanMedianMode([9,10,23,10]))