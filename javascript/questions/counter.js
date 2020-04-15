/*
Problem:
    - Write a function that keeps track of how many times it was called and returns that number
    - All functionality should be inside of the function - none outsite
*/
function myFunc() {
    let count = 0
    return function() {
        if (count < 4) {
            //some ocomputation/functionality...    
        } else {
            //trow error
        }
        
        count++
        return count
    }
}

console.log(myFunc()) // returns 1
console.log(myFunc()) // returns 2
console.log(myFunc()) // returns 3

const instanceOne = myFunc()
const instanceTwo = myFunc()

console.log('instance one: ', instanceOne())
console.log('instance one: ', instanceOne())
console.log('instance one: ', instanceOne())
console.log('instance one: ', instanceOne())
console.log('instance one: ', instanceOne())
console.log('instance two: ', instanceTwo())
console.log('instance two: ', instanceTwo())
console.log('instance two: ', instanceTwo())
console.log('instance two: ', instanceTwo())