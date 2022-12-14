// Display photographers data

function displayPhotographerData(profile) {
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
    const modalDOM = modalModel.getModalDOM();
    modalHeader.appendChild(modalDOM);
};


// Display gallery - à revoir

let galleryPhotographer

/*function displayMedia(medias) {
    galleryPhotographer = medias
    fillPage(medias)
}*/


function displayMedia(medias) {
    galleryPhotographer = medias
    fillPage(medias)

    const heart = document.querySelector(".fa-heart")
    const likeHeart = document.querySelector(".like-heart")
    const dislikeHeart = document.querySelector(".dislike-heart")
    const likesNumber = document.querySelector(".likes-number")
    heart.addEventListener('click', incrementLikes(medias));


    function incrementLikes() {
        medias.forEach((media) => {
            let numberOfLikes = media.likes
            console.log(numberOfLikes)
            numberOfLikes++
            console.log(numberOfLikes)
            /*for (let i = 0; i < heart.length; i++) {}*/


            if (likeHeart.style.display = "block") {
                numberOfLikes++
                likesNumber.innerHTML = numberOfLikes
                likeHeart.style.display = "none"
                dislikeHeart.style.display = "block"
            } else if (dislikeHeart.style.display = "block") {
                numberOfLikes--
                likesNumber.innerHTML = numberOfLikes
                dislikeHeart.style.display = "none"
                likeHeart.style.display = "block"
                console.log(numberOfLikes)
                console.log("gagné")
            }


        })
        console.log('ok')
    }
}





function fillPage(medias) {
    const pictureGallery = document.querySelector(".picture-gallery");
    medias.forEach((media) => {
        let image = media.hasOwnProperty('image')
        let video = media.hasOwnProperty('video')
        if (image == true) {
            const mediaPageModel = mediaFactory(media);
            const mediaPageDOM = mediaPageModel.getMediaDOM();
            /*pictureGallery.innerHTML = mediaPageDOM;*/
            pictureGallery.appendChild(mediaPageDOM)
        } else if (video == true) {
            const videoPageModel = videoFactory(media);
            const videoPageDOM = videoPageModel.getVideoDOM();
            pictureGallery.appendChild(videoPageDOM)
        }
    });
};
