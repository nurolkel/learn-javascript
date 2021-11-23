// Grab the welcome-el paragraph and store it in a variable called welcomeEl
const welcomeEl = document.getElementById('welcome-el')

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

const name = "Kelvin Nunez"
const greeting = `Welcome Back ${name}`


// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = greeting;