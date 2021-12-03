let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
// 2. Grab the unordered list and store it in a const variable called ulEl
const ulEl = document.getElementById('ul-el');

inputBtn.addEventListener("click", function() {
   return myLeads.push(inputEl.value)
  
})


for (let i = 0; i < myLeads.length; i++) {
    const liEl = document.createElement('li')
    liEl.textContent = myLeads[i]

    ulEl.appendChild(liEl);
}



