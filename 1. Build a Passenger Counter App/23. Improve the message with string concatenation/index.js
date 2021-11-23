let welcomeEl = document.getElementById("welcome-el")

let name = "Kelvin Nunez"
let greeting = "Welcome back "

welcomeEl.innerText = greeting + name

// Add an emoji to the end!
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1

const emoji = String.fromCodePoint(9995);

// One Way

// const welcomeMessage = `${greeting} ${name} ${emoji}`;

// console.log(welcomeMessage)

// welcomeEl.innerText = welcomeMessage;

// Second and faster way 

welcomeEl.innerText += emoji