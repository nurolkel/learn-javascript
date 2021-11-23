let name = "Linda"
let greeting = "Hi there"

// Create a function that logs out "Hi there, Linda!" when called

const hello = () => {
    const fullGreeting = `${greeting}, ${name}`;

    return console.log(fullGreeting);
}

hello();