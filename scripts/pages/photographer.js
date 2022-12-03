// Retrieve URL params

const id = new URL(document.location).searchParams.get('id')

function fetchData() {
    fetch('./data/photographers.json')
        .then((response) => response.json())
        .then((data) => {
            const currentMediaPhotographer = data.media.filter(media => media.photographerId == id)
            console.log(currentMediaPhotographer)
            const currentPhotographer = data.photographers.find(photographer => photographer.id == id);
            displayPhotographerData(data.photographers)
            console.log(currentPhotographer)
        })
        .catch((error) => console.log("Erreur"));
}
fetchData()

/*class Photographer {
    constructor(data) {
        this.id = data.id
        this.city = city
        this.country = data.country
        this.name = data.name
        this.picture = data.portrait
        this.price = data.price
        this.tagline = data.tagline
    }

    get picture() {
        return `../assets/photographers/${this.picture}`
    }
}*/




// Create html layout for photographer-details section

const photographerHeader = document.querySelector(".photographer-header");
const photographerDetailsTemplate = `
    <div class="photographer-details">
        <h1>name</h1>
        <h2>${this.city}</h2>
        <p>${this.tagline}</p>
    </div>
        <button class="contact_button" onclick="displayModal()" aria-label="Contactez-moi, ouvrir la fenêtre de contact">Contactez-moi</button>
        <img src="${this.picture}" alt= "Photo de profil de bonjour">
    `
photographerHeader.innerHTML = photographerDetailsTemplate;

const modaleHeader = document.querySelector(".form-header");
const div = document.createElement('div')
div.textContent = name
modaleHeader.appendChild(div)
modaleHeader.style.fontSize = "54px"

const pictureGallery = document.querySelector(".picture-gallery");
const portfolioTemplate = `
<div class="artwork">
    <img src="bonjour">
        <div class="description">
            <p>${this.title}</p>
            <span class="likes">bonjour/*<i class="fa-solid fa-heart"></i></span>
        </div>
    </div>
`
pictureGallery.innerHTML = portfolioTemplate;

// Create html layout for label

const label = document.querySelector(".label");
const likesAndFees = `
    < span class="total-likes" >${this.price}<i class="fa-solid fa-heart"></i></span >
        <span class="price">${this.price}€/jour</span>
`
label.innerHTML = likesAndFees;



function photographerPageFactory(data) {

    const { name, id, portrait, country, city, tagline, price } = data
    const picture = `assets/photographers/Photographers_ID/${portrait}`

    function getPhotographerDOM() {
        const div = document.createElement('div')
        const h1 = document.createElement('h1')
        div.appendChild(h1)
        h1.textContent = tagline
        return (div)
    }
    return { name, id, picture, country, city, tagline, price, getPhotographerDOM }
}
photographerPageFactory(data)

// Display photographers data

async function displayPhotographerData() {
    const photographerHeader = document.querySelector(".photographer-header")
    const photographerPageModel = photographerPageFactory(data);
    const photographerPageDOM = photographerPageModel.getPhotographerDOM();
    photographerHeader.appendChild(photographerPageDOM);
};
