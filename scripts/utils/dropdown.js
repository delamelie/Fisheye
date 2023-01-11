// DOM elements

const dropdown = document.querySelector(".dropdown")
const dropdownBtn = document.querySelector(".sort_button")
const dropupBtn = document.querySelector(".dropup_button")
const popularite = document.querySelector(".popularite")


// Expand filters function

function toggleFilters() {
    let e = window.event
    e.stopPropagation()
    if (dropdown.style.display == "flex") {
        dropdown.style.display = "none"
        dropdownBtn.setAttribute("aria-expanded", "false")
        dropdownBtn.focus()
    } else {
        dropdown.style.display = "flex"
        dropdownBtn.setAttribute("aria-expanded", "true")
        popularite.focus()
    }
}


// When Enter key is pressed

dropupBtn.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        dropupBtn.click()
        toggleFilters()
    }
})





