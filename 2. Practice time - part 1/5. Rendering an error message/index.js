// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".


const error = document.getElementById('error');

const button = document.querySelector('button');

const errorLog = () => {
   return error.textContent = 'Something went wrong, please try again'
}

button.addEventListener('click', errorLog);