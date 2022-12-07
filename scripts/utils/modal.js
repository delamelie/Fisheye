// DOM elements

const modal = document.getElementById("contact_modal");
const header = document.querySelector('.header-page-photographer')
const main = document.querySelector('#main')
const contactBtn = document.querySelector('.contact_button')
const closeBtn = document.querySelector('.close_button')
const body = document.querySelector('body')


// Open and close modal

function displayModal() {
  modal.style.display = "block";
  header.setAttribute('aria-hidden', 'true')
  main.setAttribute('aria-hidden', 'true')
  modal.setAttribute('aria-hidden', 'false')
  header.classList.add("opacity")
  main.classList.add("opacity")
  closeBtn.focus()
}

function closeModal() {
  modal.style.display = "none";
  header.setAttribute('aria-hidden', 'false')
  main.setAttribute('aria-hidden', 'false')
  modal.setAttribute('aria-hidden', 'true')
  header.classList.remove("opacity")
  main.classList.remove("opacity")
  contactBtn.focus()
}

/*
// Close modal when escape key is pressed
(document).on('keydown', e => {
  const keyCode = e.keyCode ? e.keyCode : e.which

  if (modal.getAttribute('aria-hidden', false) && keyCode === 27) {
    closeModal()
  }
})*/

// Close modal with Escape key

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal()
  }
})





