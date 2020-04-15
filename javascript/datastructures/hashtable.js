function HashTable(size) {
    this.buckets = Array(size);
    this.numBuckets = this.buckets.length
}

function HashNode(key, value, next) {
    this.key = key
    this.value = value
    this.next = next || null
}

HashTable.prototype.hash = function(key) {
    let total = 0
    for (var i = 0; i < key.length; i++) {
        total += key.charCodeAt(i)
    }
    let bucket = total % this.numBuckets

    return bucket
}

HashTable.prototype.insert = function(key, value) {
    let index = this.hash(key)
    if (!this.buckets[index]) {
        this.buckets[index] = new HashNode(key, value)
    } else if (this.buckets[index].key === key) {
        this.buckets[index].value = value
        return
    } else {
        let currentNode = this.buckets[index]
        while (currentNode.next) {
            if (currentNode.next.key === key) {
                currentNode.next.value = value
                return
            }
            currentNode = currentNode.next
        }
        currentNode.next = new HashNode(key, value)
    }
}

HashTable.prototype.get = function(key) {
    let index = this.hash(key)
    if (!this.buckets[index]) {
        return null
    } else {
        let currentNode = this.buckets[index]
        while (currentNode) {
            if (currentNode.key === key) {
                return currentNode.value
            }
            currentNode = currentNode.next
        }
        return null
    }
}

HashTable.prototype.retriveAll = function() {
    let emails = []
    for (var i = 0; i < this.numBuckets; i++) {
        let currentNode = this.buckets[i]
        while(currentNode) {
            emails.push(currentNode.value)
            currentNode = currentNode.next
        }
    }
    return emails
}

let myHT = new HashTable(30);

myHT.insert('Dean', 'dean@gmail.com')
myHT.insert('Megan', 'megan@gmail.com')
myHT.insert('Moises', 'moises@gmail.com')
myHT.insert('Carla', 'carla@gmail.com')
myHT.insert('Eloa', 'eloa@gmail.com')
myHT.insert('Mario', 'mario@gmail.com')
myHT.insert('Ana', 'ana@gmail.com')
myHT.insert('Dane', 'dane@gmail.com')

console.log(myHT.get('Eloa'))
console.log(myHT.retriveAll())

//console.log(myHT.buckets)


