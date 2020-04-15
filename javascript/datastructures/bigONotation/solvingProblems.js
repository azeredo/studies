/*
    1 - Understand the problem
    2 - Explore concrete examples
    3 - Breack it down
    4 - Solve / simplify
    5 - Look back and refactor


Understand the problem    
    1 - Can I restate the problem in my own words?
    2 - What are the inputs that go into the problem?
    3 - What are the outputs that should come from the solution to the problem?
    4 - Can the ouputs be determined from the inputs? In other words, do I have enough information to solve the problem (You may not be able to answer this question
        until you set about solving the problem. That's okay, it's still worth considering the question at this early stage)
    5 - How shoul I lavel the important pieces of data that are a part of the problem?


Write a function with takes two numbers and returns their sum
    1 - impelment addition
    2 - ints? float? what about string for large numbers?
    3 - Int? float? string?
    4 -  
    5 -
*/

/*
Write a function which takes in a string and returns counts of each character in the string
charCount("aaaa")
charCount("aaaa fdfads fsfsd")
charCount("asda Aasdas ")
charCount("")
charCount(null)
*/
/* 
initial solution
function charCount(str) {
    var result = {}

    for (var i = 0; i < str.length; i++) {        
        var char = str[i].toLowerCase()
        if (/[a-z0-9]/.test(char)) {                    
            if (result[char] > 0) {
                result[char]++
            } else {
                result[char] = 1
            }
        }
    }    
    return result
}
*/

function charCount(str) {
    var result = {}

    for (var char of str) {                
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase()        
            result[char] = ++result[char] || 1            
        }
    }    
    return result
}

function isAlphaNumeric(char) {
    var code = char.charCodeAt(0)
    if (!(code > 47 && code < 58) && //numeric (0-9)
        !(code > 64 && code < 91) && //upper alpha (A-Z)
        !(code > 96 && code < 123)) { //lower alpah (a-z)
        return false
    }
    return true       
}

console.log(charCount('Hello WORLD hi!!!'))


/*
How do you improve?
    1 - Devise a plan for solving problems
    2 - Master common problem solving patterns

Some patterns
    Frequency Counter
    Multuple Pointers
    Sliding Window
    Divide and Conquer
    Dynamic Programming
    Greedy Algorithms
    Backtracking        
    
*/
