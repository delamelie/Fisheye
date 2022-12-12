// Factory function to display images

function mediaFactory(data) {

    const { photographerId, date, image, likes, title, price } = data
    const picture = `assets/photographers/${photographerId}/${image}`

    function getMediaDOM() {
        const divMedia = document.createElement('div')
        const img = document.createElement('img')
        const divDescription = document.createElement('div')
        const p = document.createElement('p')
        const span = document.createElement('span')
        const i = document.createElement('i')
        divMedia.appendChild(img)
        divMedia.appendChild(divDescription)
        divDescription.appendChild(p)
        divDescription.appendChild(span)
        span.appendChild(i)
        divMedia.setAttribute('class', "picture")
        divDescription.setAttribute('class', "description")
        span.setAttribute('class', "likes")
        img.setAttribute('src', picture)
        img.setAttribute('alt', `Titre de la photo : ${title}. Cliquez sur la photo pour l'agrandir`)
        i.setAttribute('class', "fa-solid fa-heart", 'aria-hidden', true, 'title', "Nombre de likes")
        p.textContent = title
        span.textContent = likes
        return (divMedia)
    }
    return { photographerId, date, picture, likes, title, price, getMediaDOM }
}


// Factory function to display videos

function videoFactory(data) {

    const { photographerId, date, video, likes, title, price } = data
    const clip = `assets/photographers/${photographerId}/${video}`

    function getVideoDOM() {
        const divMedia = document.createElement('div')
        const video = document.createElement('video')
        const divDescription = document.createElement('div')
        const p = document.createElement('p')
        const span = document.createElement('span')
        const i = document.createElement('i')
        divMedia.appendChild(video)
        divMedia.appendChild(divDescription)
        divDescription.appendChild(p)
        divDescription.appendChild(span)
        span.appendChild(i)
        divMedia.setAttribute('class', "video")
        divDescription.setAttribute('class', "description")
        span.setAttribute('class', "likes")
        video.setAttribute('src', clip)
        video.setAttribute('controls', 'controls')
        video.setAttribute('alt', `Titre de la video : ${title}. Cliquez sur la video pour la jouer`)
        i.setAttribute('class', "fa-solid fa-heart", 'aria-hidden', true, 'title', "Nombre de likes")
        p.textContent = title
        span.textContent = likes
        return (divMedia)
    }
    return { photographerId, date, clip, likes, title, price, getVideoDOM }
}



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