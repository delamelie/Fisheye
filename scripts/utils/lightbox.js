// Create event to launch lightbox (onclick or using Enter key)

const lightbox = document.querySelector(".lightbox")
let mediaIndex

function addEventToMedias() {
    document.querySelectorAll(".artwork").forEach(media =>
        media.addEventListener("click", (event) => {
            mediaIndex = event.target.getAttribute("index")
            lightbox.style.display = "flex"
            header.style.display = "none"
            main.style.display = "none"
            lightbox.setAttribute("aria-hidden", "false")
            header.setAttribute("aria-hidden", "true")
            main.setAttribute("aria-hidden", "true")
            displayLightbox(mediaIndex)
        }))
}


function addEventToMediasKeyboard() {
    document.querySelectorAll(".artwork").forEach(media =>
        media.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.target.click()
            }
        }))
}


// Display lightbox

let currentMedia

function displayLightbox(mediaIndex) {
    currentMedia = galleryPhotographer[mediaIndex]
    let image = currentMedia.hasOwnProperty("image")
    let video = currentMedia.hasOwnProperty("video")
    if (image) {
        lightbox.innerHTML = lightboxImageFactory(currentMedia).getLightboxImageDOM()
    } else if (video) {
        lightbox.innerHTML = lightboxVideoFactory(currentMedia).getLightboxVideoDOM()
    } else {
        throw "Unknown format type"
    }
}


// Close lightbox (onclick or using Escape key)

function closeLightbox() {
    lightbox.style.display = "none"
    header.style.display = "block"
    main.style.display = "block"
    document.querySelector(".artwork").focus()
    lightbox.setAttribute("aria-hidden", "true")
    header.setAttribute("aria-hidden", "false")
    main.setAttribute("aria-hidden", "false")
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.style.display == "flex") {
        closeLightbox()
    }
})


// Go to previous/next media

function displayPreviousMedia() {
    mediaIndex = galleryPhotographer.indexOf(currentMedia) - 1
    if (mediaIndex < 0) {
        mediaIndex = galleryPhotographer.length - 1
    }
    displayLightbox(mediaIndex)
    document.querySelector(".previous_button").focus()
}


function displayNextMedia() {
    mediaIndex = galleryPhotographer.indexOf(currentMedia) + 1
    if (mediaIndex > galleryPhotographer.length - 1) {
        mediaIndex = 0;
    }
    displayLightbox(mediaIndex)
    document.querySelector(".next_button").focus()
}


// Go to previous/next media when pressing arrow keys

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        displayNextMedia()
    } else if (event.key === "ArrowLeft") {
        displayPreviousMedia()
    }
})









