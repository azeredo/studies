/*
What order are the number (1,2,3,4) logged out in?
*/

function logNumbers() {
    console.log(1)
    setTimeout(function() { console.log(2)}, 1000)
    setTimeout(function() { console.log(3)}, 0)
    console.log(4)
}

logNumbers()

//because event loop
//1,4,3,2