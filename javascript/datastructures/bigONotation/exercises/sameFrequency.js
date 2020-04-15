/*
Write a function called sameFrequency, when given two positive integer, find out if the two number have the same frequency of difits
Your solutions MUST have the following complexities - Time O(n)
Sample input:
sameFrequency(182,281) //true
sameFrequency(34, 14) //false
sameFrequency(3589578, 5879385) //true
sameFrequency(22, 222) //false
*/

function sameFrequency(num1, num2) {
    let str1 = num1.toString()
    let str2 = num2.toString()
    let frequency1 = {}
    let frequency2 = {}

    if (str1.length !== str2.length) {
        return false
    }

    for (let i = 0; i < str1.length; i++) {
        frequency1[str1[i]] = ++frequency1[str1[i]] || 1
    }

    for (let i = 0; i < str2.length; i++) {
        frequency2[str2[i]] = ++frequency2[str2[i]] || 1
    }

    for(let char in frequency1) {        
        if (!(frequency2[char] > 0)) {
            return false
        }

        if (frequency1[char] !== frequency2[char]) {
            return false
        }
    }

    return true    
}

console.log(sameFrequency(1823,2824))