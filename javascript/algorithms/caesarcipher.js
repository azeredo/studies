function caesarCipher(str, num) {
    num = num % 26
    let alpha = 'abcdefghjiklmnopqrstuvwxyz'.split('')
    let strLower = str.toLowerCase()
    let newString = ''
    for (var i = 0; i < strLower.length; i++) {
        let currentLetter = strLower[i]
        if (currentLetter === " ") {
            newString += currentLetter
            continue
        }
        let currentIndex = alpha.indexOf(currentLetter)
        let newIndex = currentIndex + num
        
        if (newIndex > 25) {
            newIndex -= 26
        }
        
        if (newIndex < 0) {
            newIndex += 26
        }
        
        if (str[i] === str[i].toUpperCase()) {
            newString += alpha[newIndex].toUpperCase()
        } else {
            newString += alpha[newIndex]
        }
    }
    console.log(newString)
}

caesarCipher('Moises Azeredo', 12)