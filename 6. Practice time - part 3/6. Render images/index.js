// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]
const container = document.getElementById('container');

const generateImgs = (arr) => {
    let imgsDom = ""
    for (i in arr) {
        let pictures = `<img class="team-img" src="./${arr[i]}" alt="${arr[i]}">`
        imgsDom += pictures
    }
    container.innerHTML = imgsDom
}

generateImgs(imgs);