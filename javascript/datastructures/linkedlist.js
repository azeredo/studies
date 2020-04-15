function LinkedList() {
    this.head = null
    this.tail = null
}

function Node(value, next, previous) {
    this.value = value
    this.next = next
    this.previous = previous
}

LinkedList.prototype.addToHead = function(value) {
    let newNode = new Node(value, this.head, null)
    if (this.head) {
        this.head.previous = newNode
    } else {
        this.tail = newNode
    }
    this.head = newNode
}

LinkedList.prototype.addToTail = function(value) {
    let newNode = new Node(value, null, this.tail)
    if (this.tail) {
        this.tail.next = newNode
    } else {
        this.head = newNode
    }
    this.tail = newNode
}

LinkedList.prototype.removeHead = function() {
    if (!this.head) {
        return null
    }

    let val = this.head.value
    this.head = thos.head.next
    if (this.head) {
        this.head.previous = null
    } else {
        this.tail = null
    }
    return val
}

LinkedList.prototype.removeTail = function() {
    if (!this.tail) {
        return null
    }
    let val = this.tail.value
    this.tail = this.tail.previous
    if (this.tail) {
        this.tail.next = null
    } else {
        this.head = null
    }
    return val
}

LinkedList.prototype.search = function(searchValue) {
    let currentNode = this.head
    while (currentNode) {
        if (currentNode.value === searchValue) {
            return currentNode.value
        }
        currentNode = currentNode.next
    }
}

LinkedList.prototype.indexOf = function(value) {
    let indexes = []
    let currentIndex = 0
    let currentNode = this.head
    while (currentNode) {
        if (currentNode.value === value) {
            indexes.push(currentIndex)
        }
        currentNode = currentNode.next
        currentIndex++        
    }
    return indexes
}

let myLL = new LinkedList()

myLL.addToHead(123)
myLL.addToHead(70)
myLL.addToHead('hello')
myLL.addToTail(19)
myLL.addToTail('world')
myLL.addToTail(20)

//console.log(myLL)
console.log(myLL.indexOf('world'))