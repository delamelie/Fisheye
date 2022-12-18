//Filters

const pictureGallery = document.querySelector(".picture-gallery");
const dropdownLabel = document.querySelector(".dropdown-label")

function sortByLikes(medias) {
    pictureGallery.textContent = ""
    galleryPhotographer.sort((a, b) => (a.likes < b.likes ? 1 : -1))
    displayMedia(medias)
    toggleFilters()
    dropdownLabel.innerHTML = "Popularité"
}

/*const dropdownItem = document.querySelector(".dropdown-item")
dropdownItem.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        console.log('coucou')
    }
})*/


function sortByDate(medias) {
    pictureGallery.textContent = ""
    galleryPhotographer.sort((a, b) => (a.date > b.date ? 1 : -1))
    displayMedia(medias)
    toggleFilters()
    dropdownLabel.innerHTML = "Date"
}


function sortByTitle(medias) {
    pictureGallery.textContent = ""
    galleryPhotographer.sort((a, b) => (a.title > b.title ? 1 : -1))
    displayMedia(medias)
    toggleFilters()
    dropdownLabel.innerHTML = "Titre"
}

