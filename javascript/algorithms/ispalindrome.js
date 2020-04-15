function isPalindrome(text) {
    text = text.toLowerCase()
    let charactersArr = text.split('')
    let validChars = 'abcdefghijklmnopqrstuvwxyz'.split('')

    let letterArr = []
    charactersArr.forEach(char => {
        if (validChars.indexOf(char) > -1) {
            letterArr.push(char)
        }
    })

    return letterArr.join('') === letterArr.reverse().join('')
}

console.log(isPalindrome("race car"))