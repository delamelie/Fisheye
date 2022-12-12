// Retrieve photographers data from json file

function fetchDataHomepage() {
    fetch('./data/photographers.json')
        .then(response => response.json())
        .then(data => displayData(data.photographers))
        .catch(error => console.log("An error occurred", error));
}
fetchDataHomepage()


// Retrieve URL params with photographer id

const id = new URL(document.location).searchParams.get('id')

function fetchData() {
    fetch('./data/photographers.json')
        .then(response => response.json())
        .then(data => {
            const galleryPhotographer = data.media.filter(media => media.photographerId == id)
            console.log(galleryPhotographer)
            /*galleryPhotographer.sort((a, b) => (a.likes < b.likes ? 1 : -1))*/
            /*galleryPhotographer.sort((a, b) => (a.title > b.title ? 1 : -1))*/
            /*galleryPhotographer.sort((a, b) => (a.date > b.date ? 1 : -1))*/
            displayMedia(galleryPhotographer)
            const currentPhotographer = data.photographers.find(photographer => photographer.id == id);
            displayPhotographerData(currentPhotographer)
        })
        .catch(error => console.log("An error occurred", error));
}
fetchData()