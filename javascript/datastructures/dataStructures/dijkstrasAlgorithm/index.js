class WeigthGraph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node: vertex2, weight})
        this.adjacencyList[vertex2].push({node: vertex1, weight})
    }

    dijkstra(start, finish) {
        const nodes = new PriorityQueue()
        const distances = {}
        const previous = {}
        let path = []
        let smallest

        // build up initial state
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                nodes.enqueue(vertex, 0)
                distances[vertex] = 0
            } else {
                distances[vertex] = Infinity
                nodes.enqueue(vertex, Infinity)
            }
            previous[vertex] = null
        }
        
        // as long as there is something to visit        
        while (nodes.values.length) {
            smallest = nodes.dequeue().value            
            if (smallest === finish) {                
                // we are done
                // build up path to return at end
                while (previous[smallest]) {
                    path.push(smallest)
                    smallest = previous[smallest]                    
                }
                break
            }
            
            if (smallest || distances[smallest] !== Infinity) {                
                for (let neighbor in this.adjacencyList[smallest]) {
                    // find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor]
                    // calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight
                    let nextNeighbor = nextNode.node
                    if (candidate < distances[nextNeighbor]) {
                        // updating new smallest distance to neighbor 
                        distances[nextNeighbor] = candidate
                        // updating previous - How we got to next neighbor
                        previous[nextNeighbor] = smallest
                        // enqueue in priority  queur with ne priority
                        nodes.enqueue(nextNeighbor, candidate)
                    }
                }                
            }
        }
        path = path.concat(smallest).reverse()
        console.log('fim', path)
    }
}
    
class PriorityQueue {
    constructor() {
        this.values = []
    }

    enqueue(value, priority) {
        this.values.push({value, priority})
        this.sort()
    }

    dequeue() {
        return this.values.shift()
    }

    sort() {
        this.values.sort((a, b) => {
            return a.priority - b.priority
        })
    }
}

var graph = new WeigthGraph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A", "B", 4)
graph.addEdge("A", "C", 2)
graph.addEdge("B", "E", 3)
graph.addEdge("C", "D", 2)
graph.addEdge("C", "F", 4)
graph.addEdge("D", "E", 3)
graph.addEdge("D", "F", 1)
graph.addEdge("E", "F", 1)

graph.dijkstra("A", "E")


//TO-DO implement binary heap priority queue solution