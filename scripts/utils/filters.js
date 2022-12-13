//Filters

const pictureGallery = document.querySelector(".picture-gallery");

function sortByLikes(medias) {
    pictureGallery.textContent = ""
    galleryPhotographer.sort((a, b) => (a.likes < b.likes ? 1 : -1))
    displayMedia(medias)
}


function sortByDate(medias) {
    pictureGallery.textContent = ""
    galleryPhotographer.sort((a, b) => (a.date > b.date ? 1 : -1))
    displayMedia(medias)
}


function sortByTitle(medias) {
    pictureGallery.textContent = ""
    galleryPhotographer.sort((a, b) => (a.title > b.title ? 1 : -1))
    displayMedia(medias)
}

