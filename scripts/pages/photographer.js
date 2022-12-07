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


// Create html layout for photographer-details section

function photographerPageFactory(data) {

    const { name, id, portrait, country, city, tagline, price } = data
    const picture = `assets/photographers/Photographers_ID/${portrait}`

    function getPhotographerDOM() {
        const photographerDetailsTemplate = `
        <div class="photographer-details">
            <h1>${name}</h1>
            <h2>${city}, ${country}</h2>
            <p>${tagline}</p>
        </div>
            <button class="contact_button" onclick="displayModal()" role="button" aria-labelledby="Contactez-moi, ouvrir la fenêtre de contact">Contactez-moi</button>
            <img src="${picture}" alt= "Photo de profil de ${name}">
        `
        return (photographerDetailsTemplate)
    }
    return { name, id, picture, country, city, tagline, price, getPhotographerDOM }
}


// Create html layout for form-header

function modalFactory(data) {

    const { name, id } = data

    function getFormDOM() {
        const div = document.createElement('div')
        div.textContent = name
        div.style.fontSize = "40px"
        return (div)
    }
    return { name, id, getFormDOM }
}


// Create html layout for label

function labelFactory(data) {

    const { name, id, likes, price } = data

    function getLabelDOM() {
        const likesAndFees = `
        <span class="total-likes" aria-label="nombre de likes">nombre de likes <i class="fa-solid fa-heart" aria-hidden="true" title="Nombre de likes"></i></span >
        <span class="price">${price}€/jour</span>
        `
        return (likesAndFees)
    }
    return { name, id, likes, price, getLabelDOM }
}


// Display photographers data

/*async*/ function displayPhotographerData(profile) {
    const photographerHeader = document.querySelector(".header-main-photographer")
    const photographerPageModel = photographerPageFactory(profile);
    const photographerPageDOM = photographerPageModel.getPhotographerDOM();
    photographerHeader.innerHTML = photographerPageDOM;

    const label = document.querySelector(".label")
    const labelModel = labelFactory(profile);
    const labelDOM = labelModel.getLabelDOM();
    label.innerHTML = labelDOM;

    const modalHeader = document.querySelector(".form-header")
    const modalModel = modalFactory(profile);
    const modalDOM = modalModel.getFormDOM();
    modalHeader.appendChild(modalDOM);

};


// Factory function to display gallery

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
        i.setAttribute('class', "fa-solid fa-heart", 'aria-hidden', true, 'title', "Nombre de likes")
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
        /*pictureGallery.innerHTML = mediaPageDOM;*/
        pictureGallery.appendChild(mediaPageDOM)
    });
};


//Not in use

/*function mediaFactory(data) {

    const { photographerId, date, image, likes, title, price } = data
    const picture = `assets/photographers/${photographerId}/${image}`

    function getMediaDOM() {
        const portfolioTemplate = `
        <div class="picture">
            <img src=${picture}>
            <div class="description">
                    <p>${title}</p>
                    <span class="likes">${likes}<i class="fa-solid fa-heart"></i></span>
                </div>
            </div>
        `
        return (portfolioTemplate)
    }
    return { photographerId, date, picture, likes, title, price, getMediaDOM }
}*/

/*function photographerPageFactory(data) {

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
}*/






