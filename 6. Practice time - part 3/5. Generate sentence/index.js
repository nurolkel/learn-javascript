// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2:If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
function generateSentence(desc="", arr=[]) {
    // let listItems;

    // for (let i = 0; i < arr.length; i++) {
    //     if (i === arr.length - 1) {
    //         listItems += arr[i] + "."
    //     }
    //     listItems += arr[i] + ", "
    // }
    // let sentence = `The ${arr.length} ${desc} are ${listItems}`

    // return console.log(sentence);
    let baseString = `The ${arr.length} ${desc} are `
    const lastIndex = arr.length - 1
    const secondToLastIndex = arr.length -2
    for (let i = 0; i < arr.length; i++) {
        if (i === lastIndex) {
            baseString +=`and ${arr[i]}.`
        } else if (i === secondToLastIndex){
            baseString +=`${arr[i]} `
        } else {
            baseString += arr[i] + ", "
        }
    }
    return baseString;

}

const sentence = generateSentence('Largest Countries',['USA','China','Brazil','Russia'])
console.log(sentence)