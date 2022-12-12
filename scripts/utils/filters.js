const popularity = document.querySelector(".popularite")
const titre = document.querySelector(".titre")
const date = document.querySelector(".date")

popularity.addEventListener("click", sortByLikes(photographer.media))
titre.addEventListener("click", sortByTitle())
date.addEventListener("click", sortByDate())



function sortByLikes(media) {
    galleryPhotographer.sort((a, b) => (a.likes < b.likes ? 1 : -1))
}

galleryPhotographer.sort((a, b) => (a.likes < b.likes ? 1 : -1))
galleryPhotographer.sort((a, b) => (a.title > b.title ? 1 : -1))
galleryPhotographer.sort((a, b) => (a.date > b.date ? 1 : -1))


