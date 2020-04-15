function reverseWords(string) {
    let stringlowered = string.toLowerCase().split(' ')
    let newString = []
    

    stringlowered.forEach(element => {
        let reverseWord = ''
        for (var i = element.length - 1; i >= 0; i--) {
            reverseWord += element[i]
        }
        newString.push(reverseWord)
    });

    console.log(newString.join(' '))
}


reverseWords('this is a string of words')