// Create html layout for homepage

function photographerFactory(data) {

    const { name, id, portrait, country, city, tagline, price } = data
    const picture = `assets/photographers/Photographers_ID/${portrait}`

    function getUserCardDOM() {
        const article = document.createElement('article')
        const link = document.createElement('a')
        const img = document.createElement('img')
        const h2 = document.createElement('h2')
        const h3 = document.createElement('h3')
        const h4 = document.createElement('h4')
        const p = document.createElement('p')
        article.appendChild(link)
        link.appendChild(img)
        link.appendChild(h2)
        article.appendChild(h3)
        article.appendChild(h4)
        article.appendChild(p)
        link.setAttribute('href', `photographer.html?id=${id}`)
        img.setAttribute('src', picture)
        img.setAttribute('alt', `Photo de profil du photographe ${name}.Cliquez sur la photo pour accéder à la page du photographe`)
        h2.textContent = name
        h3.textContent = `${city}, ${country}`
        h4.textContent = tagline
        p.textContent = `${price}€/jour`
        return (article)
    }
    return { name, id, picture, country, city, tagline, price, getUserCardDOM }
}


// Create html layout for photographer-details section

function photographerPageFactory(data) {

    const { name, portrait, country, city, tagline } = data
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
    return { name, picture, country, city, tagline, getPhotographerDOM }
}


// Create html layout for form-header

function modalFactory(data) {

    const { name } = data

    function getModalDOM() {
        const div = document.createElement('div')
        div.textContent = name
        div.style.fontSize = "40px"
        return (div)
    }
    return { name, getModalDOM }
}


// Create html layout for label

function labelFactory(data) {

    const { price } = data

    function getLabelDOM() {
        const likesAndFees = `
        <span class="total-likes" aria-label="nombre de likes">
            <span class="total-likes-number"></span >
            <span class="fa-solid fa-heart" aria-hidden="true" title="Nombre de likes"></span>
        </span >
        <span class="price">${price}€/jour</span>
        `
        return (likesAndFees)
    }
    return { price, getLabelDOM }
}








