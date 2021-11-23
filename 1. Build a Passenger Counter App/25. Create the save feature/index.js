// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let count = 0
const saveEl = document.getElementById("save-el");
const saveButton = document.getElementById("save-btn");

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    const dash = `${count} - `
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(dash);
    console.log(count)
    saveEl.textContent += dash
}

saveButton.addEventListener('click', save);

