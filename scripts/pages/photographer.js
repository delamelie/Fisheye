// Retrieve URL params

const id = new URL(document.location).searchParams.get('id')


function fetchData() {
    fetch('./data/photographers.json')
        .then(response => response.json())
        .then(data => {
            const galleryPhotographer = data.media.filter(media => media.photographerId == id)
            displayMedia(galleryPhotographer)
            const currentPhotographer = data.photographers.find(photographer => photographer.id == id);
            console.log(currentPhotographer)
            displayPhotographerData(currentPhotographer)
        })
        .catch(error => console.log("An error occurred", error));
}

fetchData()


// Factory function

function mediaFactory(data) {

    const { photographerId, date, image, likes, title, price } = data
    const picture = `assets/photographers/${photographerId}/${image}`

    function getMediaDOM() {
        const divPicture = document.createElement('div')
        const img = document.createElement('img')
        const divDescription = document.createElement('div')
        const p = document.createElement('p')
        const span = document.createElement('span')
        const i = document.createElement('i')
        divPicture.appendChild(img)
        divPicture.appendChild(divDescription)
        divDescription.appendChild(p)
        divDescription.appendChild(span)
        span.appendChild(i)
        divPicture.setAttribute('class', "picture")
        divDescription.setAttribute('class', "description")
        span.setAttribute('class', "likes")
        img.setAttribute('src', picture)
        img.setAttribute('alt', `Titre de la photo : ${title}. Cliquez sur la photo pour l'agrandir`)
        i.setAttribute('class', "fa-solid fa-heart")
        p.textContent = title
        span.textContent = likes
        return (divPicture)
    }
    return { photographerId, date, picture, likes, title, price, getMediaDOM }
}


// Display gallery

async function displayMedia(media) {
    const pictureGallery = document.querySelector(".picture-gallery");

    media.forEach((image) => {
        const mediaPageModel = mediaFactory(image);
        const mediaPageDOM = mediaPageModel.getMediaDOM();
        pictureGallery.appendChild(mediaPageDOM);
    });
};


/*const pictureGallery = document.querySelector(".picture-gallery");
const portfolioTemplate = `
<div class="picture">
    <img src="bonjour">
    <div class="description">
            <p>${this.title}</p>
            <span class="likes">bonjour/*<i class="fa-solid fa-heart"></i></span>
        </div>
    </div>
`
pictureGallery.innerHTML = portfolioTemplate;*/



// Create html layout for photographer-details section

function photographerPageFactory(data) {

    const { name, id, portrait, country, city, tagline, price } = data
    const picture = `assets/photographers/Photographers_ID/${portrait}`

    function getPhotographerDOM() {
        const div = document.createElement('div')
        const h1 = document.createElement('h1')
        const h2 = document.createElement('h2')
        const p = document.createElement('p')
        const button = document.createElement('button')
        const photo = document.createElement('image')
        div.appendChild(h1)
        div.appendChild(h2)
        div.appendChild(p)
        div.appendChild(button)
        div.appendChild(photo)
        div.setAttribute('class', "photographer-details")
        button.setAttribute('class', "contact_button")
        button.setAttribute('onclick', "displayModal()")
        button.setAttribute('aria-label', "Contactez-moi, ouvrir la fenêtre de contact")
        photo.setAttribute('src', picture)
        photo.setAttribute('alt', `Photo de profil du photographe ${name}.Cliquez sur la photo pour accéder à la page du photographe`)
        h1.textContent = name
        h2.textContent = `${city}, ${country}`
        p.textContent = tagline
        button.textContent = "Contactez-moi"
        return (div)
    }
    return { name, id, picture, country, city, tagline, price, getPhotographerDOM }
}

/*
const photographerHeader = document.querySelector(".photographer-header");
const photographerDetailsTemplate = `
    <div class="photographer-details">
        <h1>name</h1>
        <h2>${this._city}, ${this._country}</h2>
        <p>${this._tagline}</p>
    </div>
        <button class="contact_button" onclick="displayModal()" aria-label="Contactez-moi, ouvrir la fenêtre de contact">Contactez-moi</button>
        <img src="${this.picture}" alt= "Photo de profil de bonjour">
    `
photographerHeader.innerHTML = photographerDetailsTemplate;*/


// Display photographers data

/*async*/ function displayPhotographerData(profile) {
    const photographerHeader = document.querySelector(".photographer-header")

    /*photographers.forEach((profile) => {*/
    const photographerPageModel = photographerPageFactory(profile);
    const photographerPageDOM = photographerPageModel.getPhotographerDOM();
    photographerHeader.appendChild(photographerPageDOM);
    /*});*/
};



// Create html layout for form-header

const modaleHeader = document.querySelector(".form-header");
const div = document.createElement('div')
div.textContent = name
modaleHeader.appendChild(div)
modaleHeader.style.fontSize = "54px"


// Create html layout for label

const label = document.querySelector(".label");
const likesAndFees = `
< span class="total-likes" >${this.price}<i class="fa-solid fa-heart"></i></span >
    <span class="price">${this.price}€/jour</span>
`
label.innerHTML = likesAndFees;






