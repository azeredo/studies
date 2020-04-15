/*
Intent: Convert the interface of a class into a nother clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces
*/

var localStorage = require('./localStorage')

console.log("localStorage length: ", localStorage.getLength())

var uid = localStorage.getItem('user_id')

if (!uid) {
    console.log('User ID not found. Setting the user id and token...')
    localStorage.setItem("token", "ASDhjahJHJHJKhhkGHGJHVHVvjhvjvjhv")
    localStorage.setItem("user_id", "1231")    
} else {
    console.log("User ID found.", uid)
    console.log("clearning the User ID...")
    localStorage.clear()
}