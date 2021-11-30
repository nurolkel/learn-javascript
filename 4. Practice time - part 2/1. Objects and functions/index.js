// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country
const person = {
    name:"Kelvin",
    age: 31,
    country: "United States"
}

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

function logData() {
    console.log(`${person.name} is ${person.age} and lives in ${person.country}`);
}

logData();