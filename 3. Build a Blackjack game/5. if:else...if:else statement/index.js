// Check if the person is elegible for a birthday card from the King! (100)

let age = 100

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

if (age < 100) {
    return console.log('Not Elegible')
}else if ( age === 100) {
    return console.log('Here is your birthday card from the king')
} else {
    return console.log('Not elegible, you already have gotten one')
}