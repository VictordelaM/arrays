let array = [1,2,3,4,5,6,7,8,9,10]
console.log(array)
const even = array.filter(num => num %2 === 0)
console.log("gerade zahlen sind:")
console.log(even)

const uneven = array.filter(num => num %2 !== 0)
console.log("ungerade zahlen sind:")
console.log(uneven)