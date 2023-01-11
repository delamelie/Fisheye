// Create html layout to display images

function mediaFactory(data) {

    const { photographerId, date, image, likes, title, price } = data
    const picture = `assets/photographers/${photographerId}/${image}`

    function getMediaDOM(index) {
        const divMedia = document.createElement("div")
        const img = document.createElement("img")
        const divDescription = document.createElement("div")
        const pTitle = document.createElement("p")
        const divLikes = document.createElement("div")
        const spanNumberLikes = document.createElement("span")
        const heart = document.createElement("span")
        divMedia.setAttribute("class", "picture media")
        img.setAttribute("src", picture)
        img.setAttribute("class", "artwork")
        img.setAttribute("tabindex", "0")
        img.setAttribute("index", index)
        img.setAttribute("alt", title)
        divDescription.setAttribute("class", "description")
        pTitle.setAttribute("class", "title")
        divLikes.setAttribute("class", "likes-count")
        spanNumberLikes.setAttribute("class", "likes-number")
        heart.setAttribute("class", "fa-regular fa-heart heart")
        heart.setAttribute("aria-label", "Nombre de likes. Cliquez pour ajouter ou enlever un like")
        heart.setAttribute("role", "button")
        heart.setAttribute("tabindex", "0")
        pTitle.textContent = title
        spanNumberLikes.textContent = likes
        divMedia.appendChild(img)
        divMedia.appendChild(divDescription)
        divDescription.appendChild(pTitle)
        divDescription.appendChild(divLikes)
        divLikes.appendChild(spanNumberLikes)
        divLikes.appendChild(heart)
        return (divMedia)
    }
    return { photographerId, date, picture, likes, title, price, getMediaDOM }
}


// Create html layout to display videos

function videoFactory(data) {

    const { photographerId, date, video, likes, title, price } = data
    const clip = `assets/photographers/${photographerId}/${video}`

    function getVideoDOM(index) {
        const divMedia = document.createElement("div")
        const video = document.createElement("video")
        const divDescription = document.createElement("div")
        const pTitle = document.createElement("p")
        const divLikes = document.createElement("div")
        const spanNumberLikes = document.createElement("span")
        const heart = document.createElement("i")
        divMedia.setAttribute("class", "video media")
        video.setAttribute("src", clip)
        video.setAttribute("class", "artwork")
        video.setAttribute("controls", "controls")
        video.setAttribute("tabindex", "0")
        video.setAttribute("index", index)
        video.setAttribute("aria-label", title)
        divDescription.setAttribute("class", "description")
        pTitle.setAttribute("class", "title")
        divLikes.setAttribute("class", "likes-count")
        spanNumberLikes.setAttribute("class", "likes-number")
        heart.setAttribute("class", "fa-regular fa-heart heart")
        heart.setAttribute("aria-label", "Nombre de likes. Cliquez pour ajouter ou enlever un like")
        heart.setAttribute("role", "button")
        heart.setAttribute("tabindex", "0")
        pTitle.textContent = title
        spanNumberLikes.textContent = likes
        divMedia.appendChild(video)
        divMedia.appendChild(divDescription)
        divDescription.appendChild(pTitle)
        divDescription.appendChild(divLikes)
        divLikes.appendChild(spanNumberLikes)
        divLikes.appendChild(heart)
        return (divMedia)
    }
    return { photographerId, date, clip, likes, title, price, getVideoDOM }
}


// Create html layout for lightbox 

function lightboxImageFactory(data) {

    const { photographerId, image, title } = data
    const picture = `assets/photographers/${photographerId}/${image}`

    function getLightboxImageDOM() {
        const lightboxImageTemplate = `
                <button class="previous_button slide_button" type="button" aria-label="Image précédente"
                onclick="displayPreviousMedia()"><span class="fa-solid fa-chevron-left"></span></button>
                <div class="media-artwork media-artwork-image" tabindex="0">
                    <img src="${picture}" alt="${title}">
                    <h1 class="lightbox-artwork-title">${title}</h1>
                </div>
                <button class="next_button slide_button" type="button" aria-label="Image suivante" onclick="displayNextMedia()"><span class="fa-solid fa-chevron-right"></span></button>
                <button class="close_button lightbox_close_button" type="button" aria-label="Fermer la fenêtre" onclick="closeLightbox()"><span class="fa-solid fa-xmark"></span></button>
            `
        return (lightboxImageTemplate)
    }
    return { photographerId, picture, title, getLightboxImageDOM }
}


function lightboxVideoFactory(data) {

    const { photographerId, video, title } = data
    const clip = `assets/photographers/${photographerId}/${video}`

    function getLightboxVideoDOM() {
        const lightboxVideoTemplate = `
                <button class="previous_button slide_button" type="button" aria-label="Image précédente"
                onclick="displayPreviousMedia()"><span class="fa-solid fa-chevron-left"></span></button>
                <div class="media-artwork media-artwork-video" tabindex="0">
                    <video src="${clip}" controls></video>
                    <h1 class="lightbox-artwork-title">${title}</h1>
                </div>
                <button class="next_button slide_button" type="button" aria-label="Image suivante" onclick="displayNextMedia()"><span class="fa-solid fa-chevron-right"></span></button>
                <button class="close_button lightbox_close_button" type="button" aria-label="Fermer la fenêtre" onclick="closeLightbox()"><span class="fa-solid fa-xmark"></span></button>
            `
        return (lightboxVideoTemplate)
    }
    return { photographerId, clip, title, getLightboxVideoDOM }
}








