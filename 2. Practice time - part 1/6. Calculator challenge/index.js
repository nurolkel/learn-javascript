let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
const paragraph = document.getElementById('sum-el')

const button = document.querySelectorAll('button')

console.log(button);

function add() {

   let sum = num1 + num2
   paragraph.textContent = sum
   console.log(sum)
}

function subtract() {
    let sum = num1 - num2
    paragraph.textContent = sum;

}

function divide() {
    let sum = num1 / num2
    paragraph.textContent = sum
}

function multiply() {
    let sum = num1 * num2
    paragraph.textContent = sum;
    console.log(hello)
}

button.forEach(e => {

    if (e.innerHTML === 'Add') {
       return e.addEventListener('click',add)
    }
    if (e.innerHTML === 'Subtract') {
       return e.addEventListener('click',subtract)
    }
    if (e.innerHTML === 'Divide') {
       return e.addEventListener('click',divide)
    }
    if (e.innerHTML === 'Multiply') {
       return e.addEventListener('click',multiply)
    }
})
