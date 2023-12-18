const person = ["victor", "wolfgang", "de la Motte", "dario", "Toni", "Justin", "Tacos", "enchiladas", "pizza"]
console.log(person)
function sort (){
    let ergebnis = person.filter(wort => wort.length >= 6)
    console.log(ergebnis)
}
sort()