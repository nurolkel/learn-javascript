let firstCard = 11
let secondCard = 11
let sum = firstCard + secondCard

if (sum < 21) {
    console.log('Do you want to draw a new card?')
} else if (sum === 21) {
    console.log('You win!!')
} else if (sum > 21) {
    console.log('you lose!!')
}