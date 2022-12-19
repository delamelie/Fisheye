//Dropdown

const dropdown = document.querySelector(".dropdown")
const dropdownBtn = document.querySelector(".sort_button")
const dropupBtn = document.querySelector(".dropup_button")
const popularite = document.querySelector(".popularite")

function toggleFilters() {
    if (dropdown.style.display == "flex") {
        dropdown.style.display = "none";
        dropdownBtn.setAttribute('aria-expanded', 'false')
        dropdownBtn.setAttribute('aria-hidden', 'true')
        dropupBtn.focus()
    } else {
        dropdown.style.display = "flex";
        dropdownBtn.setAttribute('aria-expanded', 'true')
        popularite.focus()
    }
}





