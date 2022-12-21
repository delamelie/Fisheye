//Filters

const pictureGallery = document.querySelector(".picture-gallery");
const dropdownLabel = document.querySelector(".dropdown-label")
const title = document.querySelector(".titre")
const date = document.querySelector(".date")
const popularity = document.querySelector(".popularite")


function sortByLikes(medias) {
    /*stopPropagation()*/
    pictureGallery.textContent = ""
    galleryPhotographer.sort((a, b) => (a.likes < b.likes ? 1 : -1))
    displayMedia(medias)
    toggleFilters()
    dropdownLabel.innerHTML = "Popularité"
}

popularity.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        console.log('salut')
        popularity.click()
        console.log('coucou')
    }
})


function sortByDate(medias) {
    pictureGallery.textContent = ""
    galleryPhotographer.sort((a, b) => (a.date > b.date ? 1 : -1))
    displayMedia(medias)
    toggleFilters()
    dropdownLabel.innerHTML = "Date"
}

date.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        console.log('lut')
        date.click()
        console.log('cou')
    }
})


function sortByTitle(medias) {
    pictureGallery.textContent = ""
    galleryPhotographer.sort((a, b) => (a.title > b.title ? 1 : -1))
    displayMedia(medias)
    toggleFilters()
    dropdownLabel.innerHTML = "Titre"
}

title.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        console.log('salut')
        title.click()
        console.log('coucou')
    }
})

