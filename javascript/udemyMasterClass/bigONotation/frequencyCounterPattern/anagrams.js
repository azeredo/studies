/*
Given two string, write a function to determine if the second string is an anagram of the first.
An anagram is a wrod, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman
validAnagram('', '') //true
validAnagram('aaz', 'zza') //false
validAnagram('anagram', 'nagaram') //true

*/

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }

    let frequency1 = {}
    let frequency2 = {}

    for (char of str1) {
        frequency1[char] = ++frequency1[char] || 1
    }

    for (char of str2) {
        frequency2[char] = ++frequency2[char] || 1
    }

    for (key in frequency1) {        
        if (!(key in frequency2)) {
            return false
        }

        if (frequency1[key] !== frequency2[key]) {
            return false
        }
    }

    return true
}

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }

    const lookup = {}

    for (let char of str1) {
        lookup[char] = ++lookup[char] || 1
    }

    for (let char of str2) {
        if (!lookup[char]) {
            return false
        } else {
            lookup[char]--
        }
    }
    return true
}

console.log(validAnagram('aaz', 'zza'))
console.log(validAnagram('anagram', 'nagaram'))