// Factory function to display images

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
        img.setAttribute("alt", `Titre de la photo : ${title}. Cliquez sur la photo pour l'agrandir`)
        divDescription.setAttribute("class", "description")
        pTitle.setAttribute("class", "title")
        divLikes.setAttribute("class", "likes-count")
        spanNumberLikes.setAttribute("class", "likes-number")
        heart.setAttribute("class", "fa-regular fa-heart heart")
        heart.setAttribute("aria-hidden", true)
        heart.setAttribute("title", "Nombre de likes")
        heart.setAttribute("aria-label", "Nombre de likes")
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


// Factory function to display videos

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
        video.setAttribute("alt", `Titre de la video : ${title}. Cliquez sur la video pour la jouer`)
        divDescription.setAttribute("class", "description")
        pTitle.setAttribute("class", "title")
        divLikes.setAttribute("class", "likes-count")
        spanNumberLikes.setAttribute("class", "likes-number")
        heart.setAttribute("class", "fa-regular fa-heart heart")
        heart.setAttribute("aria-hidden", true)
        heart.setAttribute('title', "Nombre de likes")
        heart.setAttribute("aria-label", "Nombre de likes")
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



/*function mediaFactory(data) {

    const { photographerId, date, image, likes, title, price } = data
    const picture = `assets/photographers/${photographerId}/${image}`

    function getMediaDOM() {
        const portfolioTemplate = `
        <div class="picture picture-test">
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



// Factory function to display lightbox (images and videos)


function lightboxImageFactory(data) {

    const { photographerId, image, title } = data
    const picture = `assets/photographers/${photographerId}/${image}`

    function getLightboxImageDOM() {
        const lightboxImageTemplate = `
            <button class="previous_button slide_button" type="button" role="button" aria-label="Voir la photo ou la vidéo précédente"
            aria-describedby="Voir la photo ou la vidéo précédente" role="button" onclick="plusSlides(-1)"><span class="fa-solid fa-chevron-left aria-hidden=" true""></span></button>
            <div class="media-artwork media-artwork-image">
                <img src="${picture}" alt="${title}">
                <h1 class="lightbox-artwork-title">${title}</h1>
            </div>
            <button class="next_button slide_button" type="button" role="button" aria-label="Voir la photo ou la vidéo suivante" aria-describedby="Voir la photo ou la vidéo suivante" role="button" onclick="plusSlides(+1)"><span class="fa-solid fa-chevron-right aria-hidden=" true""></span></button>
            <button class="close_button lightbox_close_button" type="button" aria-label="Fermer la fenêtre"
            aria-describedby="Fermeture de la fenêtre" role="button" onclick="closeLightbox()"><span class="fa-solid fa-xmark" aria-hidden="true"></span></button>
        `
        return (lightboxImageTemplate)
    }
    return { photographerId, picture, title, getLightboxImageDOM }
}

/*function lightboxImageFactory(data) {

    const { photographerId, image, title } = data
    const picture = `assets/photographers/${photographerId}/${image}`

    function getLightboxImageDOM() {
        const lightboxDiv = document.createElement('div')
        const closeLightboxButton = document.createElement('button')
        const divMedia = document.createElement('div')
        const img = document.createElement('img')
        const h1 = document.createElement('h1')
        lightboxDiv.setAttribute('class', "lightbox-div")
        closeLightboxButton.setAttribute('class', "previous_button slide_button")
        divMedia.setAttribute('class', "media-artwork")
        img.setAttribute('src', "${picture}")
        h1.setAttribute('class', "lightbox-artwork-title")
        h1.textContent = title
        lightboxDiv.appendChild(closeLightboxButton)
        lightboxDiv.appendChild(divMedia)
        divMedia.appendChild(img)
        divMedia.appendChild(h1)
        /*<button class="previous_button slide_button" type="button" role="button" aria-label="Voir la photo ou la vidéo précédente"
        aria-describedby="Voir la photo ou la vidéo précédente" role="button" tabindex="0" onclick="previousMedia()"><span class="fa-solid fa-chevron-left aria-hidden=" true""></span></button>
        <div class="media-artwork">
            <img src="${picture}" controls alt="${title}">
            <h1 class="lightbox-artwork-title">${title}</h1>
        </div>
        <button class="next_button slide_button" type="button" role="button" aria-label="Voir la photo ou la vidéo suivante" aria-describedby="Voir la photo ou la vidéo suivante" role="button" tabindex="0"><span class="fa-solid fa-chevron-right aria-hidden=" true""></span></button>
        <button class="close_button lightbox_close_button" type="button" aria-label="Fermer la fenêtre"
        aria-describedby="Fermeture de la fenêtre" role="button" tabindex="0" onclick="closeLightbox()"><span class="fa-solid fa-xmark" aria-hidden="true"></span></button>
    `*/
/*return (lightboxImageTemplate)
return (lightboxDiv)
}
return { photographerId, picture, title, getLightboxImageDOM }
}*/

function lightboxVideoFactory(data) {

    const { photographerId, video, title } = data
    const clip = `assets/photographers/${photographerId}/${video}`

    function getLightboxVideoDOM() {
        const lightboxVideoTemplate = `
            <button class="previous_button slide_button" type="button" role="button" aria-label="Voir la photo ou la vidéo précédente"
            aria-describedby="Voir la photo ou la vidéo précédente" role="button" onclick="plusSlides(-1)"><span class="fa-solid fa-chevron-left aria-hidden=" true""></span></button>
            <div class="media-artwork media-artwork-video">
                <video src="${clip}" controls alt="${title}"></video>
                <h1 class="lightbox-artwork-title">${title}</h1>
            </div>
            <button class="next_button slide_button" type="button" role="button" aria-label="Voir la photo ou la vidéo suivante" aria-describedby="Voir la photo ou la vidéo suivante" role="button" onclick="plusSlides(+1)"><span class="fa-solid fa-chevron-right aria-hidden=" true""></span></button>
            <button class="close_button lightbox_close_button" type="button" aria-label="Fermer la fenêtre"
            aria-describedby="Fermeture de la fenêtre" role="button" onclick="closeLightbox()"><span class="fa-solid fa-xmark"
            aria-hidden="true"></span></button>
    `
        return (lightboxVideoTemplate)
    }
    return { photographerId, clip, title, getLightboxVideoDOM }
}


/*function lightboxVideoFactory(data) {

    const { photographerId, video, title } = data
    const clip = `assets/photographers/${photographerId}/${video}`

    function getLightboxVideoDOM() {
        const lightboxDiv = document.createElement('div')
        const closeLightboxButton = document.createElement('button')
        const divMedia = document.createElement('div')
        const video = document.createElement('video')
        const h1 = document.createElement('h1')
        lightboxDiv.setAttribute('class', "lightbox-div")
        closeLightboxButton.setAttribute('class', "previous_button slide_button")
        divMedia.setAttribute('class', "media-artwork")
        video.setAttribute('src', "${clip}")
        h1.setAttribute('class', "lightbox-artwork-title")
        h1.textContent = title
        lightboxDiv.appendChild(closeLightboxButton)
        lightboxDiv.appendChild(divMedia)
        divMedia.appendChild(video)
        divMedia.appendChild(h1)
        /*const lightboxVideoTemplate = `
            <button class="previous_button slide_button" type="button" role="button" aria-label="Voir la photo ou la vidéo précédente"
            aria-describedby="Voir la photo ou la vidéo précédente" role="button" tabindex="0" onclick="previousMedia()"><span class="fa-solid fa-chevron-left aria-hidden=" true""></span></button>
            <div class="media-artwork">
                <video src="${clip}" controls alt="${title}">
                <h1 class="lightbox-artwork-title">${title}</h1>
            </div>
            <button class="next_button slide_button" type="button" role="button" aria-label="Voir la photo ou la vidéo suivante" aria-describedby="Voir la photo ou la vidéo suivante" role="button" tabindex="0"><span class="fa-solid fa-chevron-right aria-hidden=" true""></span></button>
            <button class="close_button lightbox_close_button" type="button" aria-label="Fermer la fenêtre"
            aria-describedby="Fermeture de la fenêtre" role="button" tabindex="0" onclick="closeLightbox()"><span class="fa-solid fa-xmark"
            aria-hidden="true"></span></button>
    `*/
/*return (lightboxVideoTemplate)
return (lightboxDiv)
}
return { photographerId, clip, title, getLightboxVideoDOM }
}*/







