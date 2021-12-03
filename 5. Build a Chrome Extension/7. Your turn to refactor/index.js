// Refactor the code so that it uses .addEventListener()
// when you click the SAVE INPUT button

function saveLead() {
    console.log("Button clicked!")
}

const buttonEl = document.getElementById('input-btn');

buttonEl.addEventListener('click', saveLead)

