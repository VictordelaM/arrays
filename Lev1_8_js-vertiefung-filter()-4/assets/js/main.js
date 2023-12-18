function filter (){
    const heroArr = ["Superman", "Batman", undefined, , "Wonder Woman", "Spider-Man", "Black Widow", "Iron Man", "Thor", "Catwoman", , null];
    console.log(heroArr)
    let ergebnisOhneUndefined = heroArr.filter(removeUn)
    console.log(ergebnisOhneUndefined)
    let ergebnisOhneNull = ergebnisOhneUndefined.filter(removeNull)
    console.log(ergebnisOhneNull)
    function removeUn (word){
        return word !== undefined
    }
    function removeNull (word){
        return word !== null
    }
}
filter()