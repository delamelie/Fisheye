// DOM elements and Regex

const firstName = document.querySelector(".prenom")
const errorFirstName = document.querySelector(".erreur-prenom")
const alertFirstName = "* Votre prénom doit comporter au moins 2 caractères"
const lastName = document.querySelector(".nom")
const errorLastName = document.querySelector(".erreur-nom")
const alertLastName = "* Votre nom doit comporter au moins 2 caractères"
const email = document.querySelector(".email")
const errorEmail = document.querySelector(".erreur-email")
const alertEmail = "* Vous devez saisir une adresse e-mail valide"
const message = document.querySelector(".message")
const errorMessage = document.querySelector(".erreur-message")
const alertMessage = "* Vous devez saisir un message"
const regexName = /^([a-zA-Z-' ]+)$/
const regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/


// Inputs validation

let formValid = []

function fieldValidate(index, condition, field, error, alert) {
    if (condition) {
        formValid[index] = true
        error.style.display = "none"
        error.textContent = ""
        field.classList.remove("border-invalid", "input-border")
        field.setAttribute("aria-invalid", "false")
    } else {
        formValid[index] = false
        error.style.display = "block"
        error.textContent = alert
        field.classList.add("border-invalid", "input-border")
        field.setAttribute("aria-invalid", "true")
    }
}

firstName.addEventListener("change", function () {
    fieldValidate(0, firstName.value.length >= 2 && regexName.test(firstName.value) === true, firstName, errorFirstName, alertFirstName)
})

lastName.addEventListener("change", function () {
    fieldValidate(1, lastName.value.length >= 2 && regexName.test(lastName.value) === true, lastName, errorLastName, alertLastName)
})

email.addEventListener("change", function () {
    fieldValidate(2, email.value != "" && regexEmail.test(email.value) === true, email, errorEmail, alertEmail)
})

message.addEventListener("change", function () {
    fieldValidate(3, message.value != "", message, errorMessage, alertMessage)
})


// Form submission and reset

const submitBtn = document.querySelector(".send_button")
const form = document.querySelector(".form-contact")
submitBtn.addEventListener("click", validate)

function registrationConfirm() {
    modal.style.display = "none"
    header.classList.remove("opacity")
    main.classList.remove("opacity")
    console.log("Prénom : " + firstName.value)
    console.log("Nom : " + lastName.value)
    console.log("Email : " + email.value)
    console.log("Message : " + message.value)
    form.reset()
}

function validate(event) {
    event.preventDefault()
    fieldValidate(0, firstName.value.length >= 2 && regexName.test(firstName.value) === true, firstName, errorFirstName, alertFirstName)
    fieldValidate(1, lastName.value.length >= 2 && regexName.test(lastName.value) === true, lastName, errorLastName, alertLastName)
    fieldValidate(2, email.value != "" && regexEmail.test(email.value) === true, email, errorEmail, alertEmail)
    fieldValidate(3, message.value != "", message, errorMessage, alertMessage)
    const checks = formValid.some(e => e === false)
    if (!checks) {
        registrationConfirm()
        document.querySelector(".contact_button").focus()
    }
}
