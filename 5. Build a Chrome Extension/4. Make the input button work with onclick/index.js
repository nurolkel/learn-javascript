// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button

const saveButton = document.getElementById("input-btn");

const buttonClicked = () => {
    return console.log('Button Clicked!')
}

saveButton.addEventListener('click', buttonClicked)