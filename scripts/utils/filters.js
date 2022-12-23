const pictureGallery = document.querySelector(".picture-gallery");
const dropdownLabel = document.querySelector(".dropdown-label")
const title = document.querySelector(".titre")
const date = document.querySelector(".date")
const popularity = document.querySelector(".popularite")


// Sort by popularity (onclick or pressing Enter)

function sortByLikes(medias) {
    pictureGallery.textContent = ""
    galleryPhotographer.sort((a, b) => (a.likes < b.likes ? 1 : -1))
    displayMedia(medias)
    toggleFilters()
    dropdownLabel.innerHTML = "Popularité"
}

popularity.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        popularity.click()
    }
})


// Sort by date (onclick or pressing Enter)

function sortByDate(medias) {
    pictureGallery.textContent = ""
    galleryPhotographer.sort((a, b) => (a.date > b.date ? 1 : -1))
    displayMedia(medias)
    toggleFilters()
    dropdownLabel.innerHTML = "Date"
}

date.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        date.click()
    }
})


// Sort by title (onclick or pressing Enter)

function sortByTitle(medias) {
    pictureGallery.textContent = ""
    galleryPhotographer.sort((a, b) => (a.title > b.title ? 1 : -1))
    displayMedia(medias)
    toggleFilters()
    dropdownLabel.innerHTML = "Titre"
}

title.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        title.click()
    }
})

