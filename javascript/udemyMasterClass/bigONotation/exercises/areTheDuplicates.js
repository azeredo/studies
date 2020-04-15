/*
Implement a function called, areThereDuplicates withc accepts a varaible number of arugments, and checks whether there are any duplicates among the arguments passed in.
You can solve this using the frequent counter pattern OR the multiple pointers pattern
areThereDuplicates(1,2,3) // false
areThereDuplicates(1,2,2) // true
areThereDuplicates('a','b','c','a') // true
*/

function areThereDuplicates() { //frequency counter
    let collection = {}
    for (let val in arguments) {
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }

    console.log(collection)
    for (let key in collection) {
        if (collection[key] > 1) {
            return true
        }
    }
    return false
}

function areThereDuplicates(...args) { //multiple pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
}

function areThereDuplicates() { //one liner solution
    return new Set(arguments).size !== arguments.length // new Set(1,2,2,4,1) get unique values
}

