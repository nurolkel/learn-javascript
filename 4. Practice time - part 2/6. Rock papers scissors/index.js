let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

let randomNumber = Math.floor(Math.random() * 3) 

function randomPlay() {
    return console.log(hands[randomNumber])
}

randomPlay();