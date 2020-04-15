const user1 = {
    name: 'Jordan',
    age: 28
}

const user2 = {
    name: 'Jordan',
    age: 28
}

const user3 = user1

console.log(user1 == user2) //false
console.log(user1 === user2) //false
console.log(user1 == user3) //true
console.log(user1 === user3) //true
console.log(JSON.stringify(user1) == JSON.stringify(user2)) //true
console.log(JSON.stringify(user1) == JSON.stringify(user2)) //true
console.log([] == [JSON.stringify(user2)]) //false
console.log(JSON.stringify([]) == JSON.stringify([])) //true
