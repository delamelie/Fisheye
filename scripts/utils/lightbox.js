// Create event to launch lightbox (onclick or using Enter key)

const lightbox = document.querySelector(".lightbox")

function addEventToMedias() {
    document.querySelectorAll(".artwork").forEach(media =>
        media.addEventListener("click", (event) => {
            console.log(event.target.getAttribute("index"))
            console.log(event.target)
            const imageIndex = event.target.getAttribute("index")
            lightbox.style.display = "flex";
            header.style.display = "none";
            main.style.display = "none";
            lightbox.setAttribute("aria-hidden", "false")
            header.setAttribute("aria-hidden", "true")
            main.setAttribute("aria-hidden", "true")
            displayLightbox(imageIndex)
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

function displayLightbox(imageIndex) {
    currentMedia = galleryPhotographer[imageIndex]
    let image = currentMedia.hasOwnProperty("image")
    let video = currentMedia.hasOwnProperty("video")
    console.log(currentMedia)
    if (image) {
        lightbox.innerHTML = lightboxImageFactory(currentMedia).getLightboxImageDOM()
    } else if (video) {
        lightbox.innerHTML = lightboxVideoFactory(currentMedia).getLightboxVideoDOM()
    } else {
        throw "Unknown format type"
    }
}


// Close lightbox

function closeLightbox() {
    lightbox.style.display = "none"
    header.style.display = "block"
    main.style.display = "block"
    lightbox.setAttribute("aria-hidden", "true")
    header.setAttribute("aria-hidden", "false")
    main.setAttribute("aria-hidden", "false")
}





// Go to next/previous media


let slideIndex = 1
/*showSlides(slideIndex)*/

// Next/previous controls
/*function plusSlides(n) {
    showSlides(slideIndex += n)
}


function showSlides(n) {
    let i;
    let slides = document.querySelector(".lightbox")
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        document.querySelector(".lightbox")[i].style.display = "none"
    }
    document.querySelector(".lightbox")[slideIndex - 1].style.display = "block"
}


document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        console.log('yes')
        showSlides(+1)
    } else if (event.key === "ArrowLeft") {
        showSlides(-1)
    }
})*/









