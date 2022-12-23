// Display photographer's data

let totalLikesDiv = document.querySelector(".total-likes-number")

function displayPhotographerData(profile) {
    //Display header
    const photographerHeader = document.querySelector(".header-main-photographer")
    photographerHeader.innerHTML = photographerPageFactory(profile).getPhotographerDOM()

    // Display photographer's name in modal
    const modalHeader = document.querySelector(".form-header")
    const modalModel = modalFactory(profile);
    modalHeader.appendChild(modalModel.getModalDOM())

    // Display label
    const label = document.querySelector(".label")
    label.innerHTML = labelFactory(profile).getLabelDOM()
};


// Display gallery

let galleryPhotographer

function displayMedia(medias) {

    // Display gallery
    galleryPhotographer = medias
    const pictureGallery = document.querySelector(".picture-gallery");
    medias.forEach((media, index) => {
        let image = media.hasOwnProperty('image')
        let video = media.hasOwnProperty('video')
        if (image == true) {
            const mediaPageModel = mediaFactory(media);
            pictureGallery.appendChild(mediaPageModel.getMediaDOM(index))
        } else if (video == true) {
            const videoPageModel = videoFactory(media);
            pictureGallery.appendChild(videoPageModel.getVideoDOM(index))
        }
    });

    // Display total number of likes inside label
    let totalLikesDiv = document.querySelector(".total-likes-number")
    totalLikesDiv.innerHTML = likesTotal()

    heartIncrement()
    heartIncrementKeybord()
    addEventToMedias()
};


























