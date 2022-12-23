// Retrieve all photographers data from json file

function fetchDataHomepage() {
    fetch('./data/photographers.json')
        .then(response => response.json())
        .then(data => displayData(data.photographers))
        .catch(error => console.log("An error occurred", error));
}
fetchDataHomepage()


// Retrieve each photographer and gallery form URL params with photographer id

const id = new URL(document.location).searchParams.get('id')

function fetchData() {
    fetch('./data/photographers.json')
        .then(response => response.json())
        .then(data => {
            const galleryPhotographer = data.media.filter(media => media.photographerId == id)
            const currentPhotographer = data.photographers.find(photographer => photographer.id == id);
            displayPhotographerData(currentPhotographer)
            displayMedia(galleryPhotographer)
        })
        .catch(error => console.log("An error occurred", error));
}
fetchData()