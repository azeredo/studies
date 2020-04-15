/*
Two essential parts of a recursive function
    Base Case
    Different Input
*/
function countDown(num) {
    if (num <= 0) {
        console.log("All done")
        return
    }
    console.log(num)
    num--
    countDown(num)
}

countDown(3)

function sumRange(num) {
    if (num === 1) {
        return 1
    }
    return num + sumRange(num - 1)    
}

console.log(sumRange(3))

function factorial(num) {
    if (num === 1) {
        return 1
    }

    return num * factorial(num - 1)
}

console.log(factorial(5))

/*
Where things go wrong
    No base case
    Forgetting to return or returning the wrong thing
*/

/*
Helper method recursion
*/
function collectOddValues(arr) {
    let result = []
    
    function helper(helperInput) {
        if (helperInput.length === 0) {
            return
        }

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1))
    }

    helper(arr)

    return result
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9]))

/*
Pure recursion
    For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them
*/
function collectOddValues(arr) {
    let newArr = []

    if (arr.length === 0) {
        return newArr
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0])
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)))

    return newArr
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9]))

/*
Write a function called power which accepts a base and an expoent. The function should return the power of the base to the exponent.
This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents
*/
function power(num1, num2) {
    if (num2 <= 0) {
        return 1
    }
    return num1 * (power(num1, (num2 - 1)))
}

console.log(power(2,5))

/*
Write a function factorial whic accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers bellor it.
*/
function factorial(num) {
    if (num === 0) {
        return 1
    }

    return num * factorial(num - 1)
}

/*
Write a function called productOfArray which takes in array of numbers and returns the product of them all
productOfArray([1,2,3,10])//60
*/
function productOfArray(arr) {
    if (arr.length === 0) {
        return 1
    }
    return arr[0] * productOfArray(arr.slice(1))
}

/*
Wrhite a function called recursiveRange which accepts a number and add up all the numbers from 0 to the number passed to the function
*/
function recursiveRange(num) {
    if (num === 0) {
        return 0
    }

    return num + recursiveRange(num -1)
}