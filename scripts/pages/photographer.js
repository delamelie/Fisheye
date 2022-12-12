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


// Display gallery

function displayMedia(medias) {
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













