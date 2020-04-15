const list1 = [1,2,3,4,5]
const list2 = list1
list1.push(6,7,8)
console.log(list2) //[1,2,3,4,5,6,7,8]

const list3 = [1,2]
const list4 = [...list3]
list3.push(6,7,8)
console.log(list3)
console.log(list4)


//passing by value
const myNum = 10
const myString = 'hello world'
const myString2 = myString