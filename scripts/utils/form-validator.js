// DOM elements and Regex

const prenom = document.querySelector(".prenom");
const erreurPrenom = document.querySelector(".erreur-prenom");
const alertePrenom = "* Votre prénom doit comporter au moins 2 caractères";
const nom = document.querySelector(".nom");
const erreurNom = document.querySelector(".erreur-nom");
const alerteNom = "* Votre nom doit comporter au moins 2 caractères";
const email = document.querySelector(".email");
const erreurEmail = document.querySelector(".erreur-email");
const alerteEmail = "* Vous devez saisir une adresse e-mail valide";
const message = document.querySelector(".message");
const erreurMessage = document.querySelector(".erreur-message");
const alerteMessage = "* Vous devez saisir un message";
const regexNom = /^([a-zA-Z-' ]+)$/;
const regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;


// Inputs validation

let formValid = true;

function fieldValidate(condition, champ, erreur, alerte) {
    if (condition) {
        erreur.style.display = "none";
        erreur.textContent = "";
        champ.classList.remove("border-invalid");
        champ.setAttribute("aria-invalid", "false")
        //return true;
    } else {
        formValid = false;
        erreur.style.display = "block";
        erreur.textContent = alerte;
        champ.classList.add("border-invalid");
        champ.setAttribute("aria-invalid", "true")
    }
}

prenom.addEventListener('input', function () {
    fieldValidate(prenom.value.length >= 2 && regexNom.test(prenom.value) === true, prenom, erreurPrenom, alertePrenom);
});

nom.addEventListener('input', function () {
    fieldValidate(nom.value.length >= 2 && regexNom.test(nom.value) === true, nom, erreurNom, alerteNom);
});

email.addEventListener('input', function () {
    fieldValidate(email.value != "" && regexEmail.test(email.value) === true, email, erreurEmail, alerteEmail);
});

message.addEventListener('input', function () {
    fieldValidate(message.value != "", message, erreurMessage, alerteMessage);
});


// Form submission and reset

const submitBtn = document.querySelector('.send_button')
const form = document.querySelector('.form-contact')
submitBtn.addEventListener('click', validate);

function registrationConfirm() {
    modal.style.display = "none";
    header.classList.remove("opacity")
    main.classList.remove("opacity")
    console.log('Prénom : ' + prenom.value)
    console.log('Nom : ' + nom.value)
    console.log('Email : ' + email.value)
    console.log('Message : ' + message.value)
    form.reset();
}

function validate(event) {
    event.preventDefault();
    fieldValidate(regexNom.test(prenom.value) === true, prenom, erreurPrenom, alertePrenom);
    fieldValidate(nom.value.length >= 2 && regexNom.test(nom.value) === true, nom, erreurNom, alerteNom);
    fieldValidate(email.value != "" && regexEmail.test(email.value) === true, email, erreurEmail, alerteEmail);
    fieldValidate(message.value != "", message, erreurMessage, alerteMessage);
    if (formValid) {
        registrationConfirm();
    } else {
        formValid = true;
    }
}

