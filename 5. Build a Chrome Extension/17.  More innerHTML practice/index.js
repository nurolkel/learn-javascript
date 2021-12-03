
const container = document.getElementById("container")

container.innerHTML = "<button id='buy-btn'>Buy!</button>"

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"

const buyEl = document.getElementById('buy-btn');
console.log(buyEl)

const thanksEl = () => {
    const thankYouEl = document.createElement('p');
    thankYouEl.textContent = "Thank you for Buying!"

    buyEl.insertAdjacentElement('afterend',thankYouEl);
}

buyEl.addEventListener('click',thanksEl);