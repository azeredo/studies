class Store {
    constructor(name) {
        this.name = name
        this.subscribers = []
    }

    subscribe(observer) {
        this.subscribers.push(observer)
    }

    sale(discount) {
        this.subscribers.forEach(subscriber => {
            subscriber.notify(this.name, discount)
        })        
    }
}

module.exports = Store