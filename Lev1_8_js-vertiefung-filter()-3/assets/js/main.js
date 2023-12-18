const nums = [1,2,3,4,5,6,10,20,30,40,50,60]

let smallNums = sort()
let bigNums = sortBig()
function sort (){
    let klein = nums.filter(num => num < 20)
    return klein
}
function sortBig (){
    let big = nums.filter(num => num >= 20)
    return big
}
function multi (num) {
    return num * 2
}
const smallMult = smallNums.map(multi)


// console.log(nums)
console.log(smallNums)
// console.log(bigNums)
console.log(smallMult)
