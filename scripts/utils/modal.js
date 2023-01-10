// DOM elements

const modal = document.getElementById("contact_modal");
const header = document.querySelector(".header-page-photographer")
const main = document.querySelector("#main")
const closeBtn = document.querySelector(".close_button")
let lastFocusedElement


// Open and close modal

function openModal() {
  lastFocusedElement = document.querySelector(":focus")
  modal.style.display = "block"
  header.setAttribute("aria-hidden", "true")
  main.setAttribute("aria-hidden", "true")
  modal.removeAttribute("aria-hidden")
  header.classList.add("opacity")
  main.classList.add("opacity")
  closeBtn.focus()
}

function closeModal() {
  lastFocusedElement.focus()
  modal.style.display = "none"
  header.removeAttribute("aria-hidden")
  main.removeAttribute("aria-hidden")
  modal.setAttribute("aria-hidden", "true")
  header.classList.remove("opacity")
  main.classList.remove("opacity")
}


// Close modal with Escape key

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.style.display == "block") {
    closeModal()
  }
})


// Keep focus inside modal

const focusableElements = "input, button"
const firstFocusableElement = modal.querySelectorAll(focusableElements)[0]
const focusableArray = modal.querySelectorAll(focusableElements)
const lastFocusableElement = focusableArray[focusableArray.length - 1]

document.addEventListener("keydown", function (event) {
  if (event.key === "Tab") {
    if (document.activeElement === lastFocusableElement) {
      firstFocusableElement.focus()
      event.preventDefault()
    }
  } else if (event.shiftKey) {
    if (document.activeElement === firstFocusableElement) {
      lastFocusableElement.focus()
      event.preventDefault()
    }
  }
})







