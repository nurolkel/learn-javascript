const welcomeEl = document.getElementById("welcome-el")

// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(greeting,user) {
    welcomeEl.textContent = greeting + " " + user + " 👋"    
}

greetUser("Hello!","Kelvin")