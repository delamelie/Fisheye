// Display each photographer's data

function displayPhotographerData(profile) {
    //Display photographer page's header
    const photographerHeader = document.querySelector(".header-main-photographer")
    photographerHeader.innerHTML = photographerPageFactory(profile).getPhotographerDOM()

    // Display photographer's name inside modal
    const modalHeader = document.querySelector(".form-header")
    const modalModel = modalFactory(profile)
    modalHeader.appendChild(modalModel.getModalDOM())

    // Display label and fee inside label at the bottom of the page
    const label = document.querySelector(".label")
    label.innerHTML = labelFactory(profile).getLabelDOM()
}


// Display photographer's portfolio

let galleryPhotographer

function displayMedia(medias) {

    // Display gallery (photos and videos)
    galleryPhotographer = medias
    const pictureGallery = document.querySelector(".picture-gallery")
    medias.forEach((media, index) => {
        let image = media.hasOwnProperty("image")
        let video = media.hasOwnProperty("video")
        if (image) {
            const mediaPageModel = mediaFactory(media)
            pictureGallery.appendChild(mediaPageModel.getMediaDOM(index))
        } else {
            const videoPageModel = videoFactory(media)
            pictureGallery.appendChild(videoPageModel.getVideoDOM(index))
        }
    })

    // Display total number of likes inside label at the bottom of the page
    let totalLikesDiv = document.querySelector(".total-likes-number")
    totalLikesDiv.innerHTML = likesTotal()


    // Likes increment functions
    heartIncrement()
    heartIncrementKeyboard()
    /*likesTotalStorage()*/


    // Lightbox setup
    addEventToMedias()
    addEventToMediasKeyboard()
}


























