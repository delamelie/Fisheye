const dropdown = document.querySelector(".dropdown")
const dropdownBtn = document.querySelector(".sort_button")
const dropupBtn = document.querySelector(".dropup_button")
const popularite = document.querySelector(".popularite")


// Expand filters function

function toggleFilters() {
    let e = window.event
    e.stopPropagation();
    if (dropdown.style.display == "flex") {
        dropdown.style.display = "none";
        dropdownBtn.setAttribute('aria-expanded', 'false')
        dropdownBtn.setAttribute('aria-hidden', 'false')
        dropdown.setAttribute('aria-hidden', 'true')
        dropdownBtn.focus()
    } else {
        dropdown.style.display = "flex";
        /*dropdownBtn.style.display = "none";*/
        dropdown.setAttribute('aria-hidden', 'false')
        dropdownBtn.setAttribute('aria-expanded', 'true')
        dropdownBtn.setAttribute('aria-hidden', 'true')
        popularite.focus()
    }
}


// Prevent propagation when Enter is pressed

dropupBtn.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        dropupBtn.click()
        toggleFilters()
    }
})





