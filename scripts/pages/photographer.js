// Retrieve URL params

const urlRetrieve = window.location.search
console.log(urlRetrieve)
const searchParams = new URLSearchParams(urlRetrieve)
console.log(searchParams)
/*const params = searchParams.getAll(urlRetrieve)
console.log(params)*/
const name = searchParams.get('name');
const city = searchParams.get('city');
const country = searchParams.get('country');
const tagline = searchParams.get('tagline');
const price = searchParams.get('price');
const picture = searchParams.get('portrait');
console.log(price)
console.log(picture)



/*function photographerPageFactory(data) {

    const { name, portrait, country, city, tagline, price } = data
    const picture = `assets / photographers / Photographers_ID / ${portrait} `

    function getPhotographerPageDOM() {
        const photographerHeader = document.querySelector(".photographer-header");
        const photographerDetailsTemplate = `
    <div class="photographer-details">
        <h1>${name}</h1>
        <h2>${city}, ${country}</h2>
        <p>${tagline}</p>
    </div>
        <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
        <img src="${picture}">
    `
        return (div)
    }
    return { name, picture, country, city, tagline, price, getPhotographerPageDOM }
}*/



// Create html layout for photographer-details section

const photographerHeader = document.querySelector(".photographer-header");
const photographerDetailsTemplate = `
    <div class="photographer-details">
        <h1>${name}</h1>
        <h2>${city}, ${country}</h2>
        <p>${tagline}</p>
    </div>
        <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
        <img src="assets/photographers/Photographers_ID / ${picture}">
    `
photographerHeader.innerHTML = photographerDetailsTemplate;


// Create html layout for photographer-portfolio section

function fetchDataArtworks() {
    fetch('./data/photographers.json')
        .then((response) => response.json())
        .then((data) => {
            console.log(data.media);
            displayData(data.media);
        })
        .catch((error) => console.log("Erreur"));
}
fetchDataArtworks()

const pictureGallery = document.querySelector(".picture-gallery");
const portfolioTemplate = `
    <div class="artwork">
        <img src="${picture}">
        <div class="description">    
            <p>${this._ti}</p>
            <i class="fa-solid fa-heart"></i>
        </div>
    </div>
    `
pictureGallery.innerHTML = portfolioTemplate;


// Create html layout for label

const label = document.querySelector(".label");
const likesAndFees = `
    <div class="likes">${price}€/jour</div >
    <div class="price">${price}</div>
`
label.innerHTML = likesAndFees;



// Create html layout for photographer's page

/*function photographerPageFactory(data) {

    const { name, id, portrait, country, city, tagline } = data
    const picture = `assets / photographers / Photographers_ID / ${ portrait } `

    function getPhotographerPageDOM() {
        const div = document.createElement('div')
        div.setAttribute('class', 'photographer-details')
        return (div)
    }
    return { name, id, picture, country, city, tagline, getPhotographerPageDOM }
}


// Display photographers data

async function displayPhotographersData(photographers) {
    const photographerHeader = document.querySelector(".photographer-header");

    photographers.forEach((photographer) => {
        const photographerDetailsTemplate = photographerPageFactory(photographer);
        const photographerPageDOM = photographerDetailsTemplate.getPhotographerPageDOM();
        photographerHeader.appendChild(photographerPageDOM);
    });
};*/
