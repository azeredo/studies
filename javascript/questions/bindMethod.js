this.distance = 10000

const roadTrip1 = {
    distance: 3000,
    getDistance: function(unit, caption) {
        console.log('1', this.distance)
        return this.distance + unit + caption
    }
}

const getTripDistance = roadTrip1.getDistance.bind(roadTrip1, 'km')

console.log(getTripDistance(' into total'));

console.log('2', this.distance)