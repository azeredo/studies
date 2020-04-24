class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        let newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
            return this
        }
        
        let current = this.root
        while (true) {
            if (value === current.value) {
                return undefined
            }

            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode
                    return this
                }
                current = current.left                
            } else {
                if (current.right === null) {
                    current.right = newNode
                    return this
                }
                current = current.right                
            }
        }
    }

    insertRecursively(newNode, current) {
        if (this.root === null) {
            this.root = newNode
            return this
        }        
        
        if (newNode.value === current.value) {
            return undefined
        }

        if (newNode.value < current.value) {
            if (current.left === null) {
                current.left = newNode
                return this
            }
            this.insertRecursively(newNode, current.left)
        } else {
            if (current.right === null) {
                current.right = newNode
                return this
            }            
            this.insertRecursively(newNode, current.right)
        }
    }

    find(value) {
        if (this.root === null) {
            return undefined
        }

        let current = this.root
        let found = false
        while (current && !found) {
            if (value < current.value) {
                current = current.left
            } else if (value > current.value) {
                current = current.right
            } else {
                found = true
            }
        }
        if (found) {
            return current
        }
        return undefined
    }

    BFS() {
        let data = []
        let queue = []
        let node = this.root
        queue.push(node)
        while (queue.length) {
            node = queue.shift()
            data.push(node.value)
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        return data
    }

    DFSPreOrder() {
        let data = []        
        function traverse(node) {
            data.push(node.value)
            if (node.left) {
                traverse(node.left)
            }
            if (node.right) {
                traverse(node.right)
            }
        }
        traverse(this.root)
        return data
    }

    DFSPostOrder() {
        let data = []        
        function traverse(node) {            
            if (node.left) {
                traverse(node.left)
            }
            if (node.right) {
                traverse(node.right)
            }
            data.push(node.value)
        }
        traverse(this.root)
        return data
    }

    DFSInOrder() {
        let data = []        
        function traverse(node) {            
            if (node.left) {
                traverse(node.left)
            }
            data.push(node.value)
            if (node.right) {
                traverse(node.right)
            }            
        }
        traverse(this.root)
        return data
    }

    getMinVal(node) {
        if (node.left) {
            return this.getMinVal(node.left)
        } else {
            return node.value
        }
    }
    
    getMaxVal(node) {
        if (node.right) {
            return this.getMaxVal(node.right)
        } else {
            return node.value
        }
    }
}

bst = new BinarySearchTree()
bst.insert(180)
bst.insert(3)
bst.insert(18)
bst.insert(1)
bst.insert(4)
bst.insert(410)
bst.insert(92)
bst.insert(-2)
bst.insert(411)

console.log('MAX: ', bst.getMaxVal(bst.root), 'MIN:', bst.getMinVal(bst.root))

console.log('BST - ', JSON.stringify(bst))

console.log('BFS - ', bst.BFS())
console.log('DFSPreOrder - ', bst.DFSPreOrder())
console.log('DFSPostOrder - ', bst.DFSPostOrder())
console.log('DFSInOrder - ', bst.DFSInOrder())