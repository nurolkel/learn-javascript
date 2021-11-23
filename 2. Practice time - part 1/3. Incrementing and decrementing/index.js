let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable
const add3Points = () => {
    return myPoints += 3
}

const removePoint = () => {
    return myPoints -= 1
}

add3Points();
removePoint();
add3Points();
removePoint();
add3Points();


// Call the functions to that the line below logs out 10
console.log(myPoints)