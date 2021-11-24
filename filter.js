let animals = ["Cat", "Dog", "Rabbit", "Horse", "Cow", "Bird", "Shark"];

function isFourLeggedAnimal(animal){
    let fourLeggedAnimals = ["Cat", "Dog", "Horse", "Cow"]
    return fourLeggedAnimals.includes(animal)
}

let fourLeggedAnimals = animals.filter(isFourLeggedAnimal);
console.log(fourLeggedAnimals);