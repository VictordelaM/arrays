const nums = [1,2,3,4,5,6,10,20,30,40,50,60]
console.log(nums)
let newNums = sort()
let finalNums = newNums.map(multi)
function sort (){
    let ergebnis = nums.filter(num => num < 20)
    // console.log(ergebnis)
    return ergebnis
}

console.log(newNums)
console.log(finalNums)

function multi (num) {
    num * 2
}