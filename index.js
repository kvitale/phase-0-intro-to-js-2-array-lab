const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    return cats.push("Ralph")
}


function destructivelyPrependCat(name){
    return cats.unshift("Bob")
}


function destructivelyRemoveLastCat(name){
    return cats.pop("Ralph")
}


function destructivelyRemoveFirstCat(name){
    return cats.shift("Bob")
}

function appendCat(){
    return [...cats, "Broom"]
}

function prependCat(){
    return ["Arnold", ...cats]
}

function removeLastCat(){
    return cats.slice(0, cats.length -1)
}

function removeFirstCat(){
    return cats.slice(1)
}