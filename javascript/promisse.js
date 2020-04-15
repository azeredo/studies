function CustomError(message) {
    console.log(message)
}
function getLikedBrands(id) {
    return new Promise((resolve, reject) => {
        console.log('entrou1')
        setTimeout(() => {
            console.log('esperou ');
            resolve([{id:1, name:"Logestyx"}, {id:10, name:"Gladlear"}])
          }, 1000)
        
    })
}

function getTopBrandsForGender(gender) {    
    return new Promise((resolve, reject) => {
        console.log('entrou2')
        resolve([{id:6, name:"Burylaze Slapgalt"}, {id:1, name:"Logestyx"}, {id:7, name:"Izarpure"}])
    })
} 

function solution(U, N) {
    return new Promise((resolve, reject) => {
        // Resolve the promise with the result
        if (N === 5) {
            reject(CustomError('Error 5'))
            return      

        }
        
        let returnedBrands = []
        Promise.all([getLikedBrands(U.id), getTopBrandsForGender(U.gender)])
        .then(([result1, result2]) => {
            console.log('result1', result1)
            returnedBrands = result1.map(brand => {
                return brand.name
            }) 
            console.log('apos o primeiro map', returnedBrands)           
            
            result2.forEach(brand => {
                if (returnedBrands.indexOf(brand.name) === -1) {
                    returnedBrands.push(brand.name)
                }
            })

            console.log('apos o segundo foreach', returnedBrands)           
            
            if (N > returnedBrands.length) {
                reject(CustomError('Not enough data'))
            } else {
                resolve(returnedBrands.slice(0, N))
            }
        })
        .catch(error => {
            reject(CustomError('Not enough data'))
        })
    });
}

solution({ id: 123132, gender: "FEMALE" }, 3)
.then(result => console.log('resultado final', result))
.catch(error => { console.log('deu erro no final')})