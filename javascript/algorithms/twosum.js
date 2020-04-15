
function twosum(numArray, sum) {
    var pairs = []
    var hashtable = []

    for (var i = 0; i < numArray.length; i++) {
        var currNum = numArray[i]
        var counterpart = sum - currNum
        console.log('curr num ', currNum, ' counterpart ', counterpart, ' indexof', hashtable.indexOf(counterpart))
        if (hashtable.indexOf(counterpart) !== -1) {
            pairs.push([currNum, counterpart])
        }
        hashtable.push(currNum)
    }
    console.log(hashtable)
    return pairs

}

console.log(twosum([1,2,3,4,5,6,7,8,9,3,5,2], 7))