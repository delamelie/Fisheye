// Factory function to display images

function mediaFactory(data) {

    const { photographerId, date, image, likes, title, price } = data
    const picture = `assets/photographers/${photographerId}/${image}`

    function getMediaDOM() {
        const divMedia = document.createElement('div')
        const img = document.createElement('img')
        const divDescription = document.createElement('div')
        const p = document.createElement('p')
        const divLikes = document.createElement('div')
        const span = document.createElement('span')
        const imageEmptyHeart = document.createElement('i')
        const imageFullHeart = document.createElement('i')
        divMedia.setAttribute('class', "picture media")
        img.setAttribute('src', picture)
        img.setAttribute('alt', `Titre de la photo : ${title}. Cliquez sur la photo pour l'agrandir`)
        divDescription.setAttribute('class', "description")
        p.setAttribute('class', "title")
        divLikes.setAttribute('class', "likes-count")
        span.setAttribute('class', "likes-number")
        imageEmptyHeart.setAttribute('class', "fa-regular fa-heart like-heart", 'aria-hidden', true, 'title', "Nombre de likes")
        imageFullHeart.setAttribute('class', "fa-solid fa-heart dislike-heart", 'aria-hidden', true, 'title', "Nombre de likes")
        p.textContent = title
        span.textContent = likes
        divMedia.appendChild(img)
        divMedia.appendChild(divDescription)
        divDescription.appendChild(p)
        divDescription.appendChild(divLikes)
        divLikes.appendChild(span)
        divLikes.appendChild(imageEmptyHeart)
        divLikes.appendChild(imageFullHeart)
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
        const divLikes = document.createElement('div')
        const span = document.createElement('span')
        const imageEmptyHeart = document.createElement('i')
        const imageFullHeart = document.createElement('i')
        divMedia.setAttribute('class', "video media")
        video.setAttribute('src', clip)
        video.setAttribute('controls', 'controls')
        video.setAttribute('alt', `Titre de la video : ${title}. Cliquez sur la video pour la jouer`)
        divDescription.setAttribute('class', "description")
        p.setAttribute('class', "title")
        divLikes.setAttribute('class', "likes-count")
        span.setAttribute('class', "likes-number")
        imageEmptyHeart.setAttribute('class', "fa-regular fa-heart like-heart", 'aria-hidden', true, 'title', "Nombre de likes")
        imageFullHeart.setAttribute('class', "fa-solid fa-heart dislike-heart", 'aria-hidden', true, 'title', "Nombre de likes")
        p.textContent = title
        span.textContent = likes;
        divMedia.appendChild(video)
        divMedia.appendChild(divDescription)
        divDescription.appendChild(p)
        divDescription.appendChild(divLikes)
        divLikes.appendChild(span)
        divLikes.appendChild(imageEmptyHeart)
        divLikes.appendChild(imageFullHeart)
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


/*function incrementLikes() {
    displayMedia(medias)
    const likesHeart = document.querySelector(".fa-regular")
    likesHeart.addEventListener("click", incrementLikes())
    console.log(likesHeart)
    console.log("salut")
    let numberOfLikes = likes
    console.log(numberOfLikes)
    numberOfLikes++
}

incrementLikes()*/




