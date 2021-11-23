// document.getElementById("count").innerText = 5


// intialize the count as 0
let count = 0;
// listen for clicks on the increment button
const button = document.getElementById('increment-btn');
const counter = document.getElementById('count-el')
const decreaseBtn = document.getElementById('decrease');

function increment() {
    count = count + 1
    counter.innerHTML = count
}

function decrease() {

    if (count === 0) {
        return;
    }

    count = count - 1

    counter.innerHTML = count
}


button.addEventListener('click',increment);
decreaseBtn.addEventListener('click', decrease)



// increment the count variable when the button is clicked

// change the count-el in the HTML to reflect the new count




