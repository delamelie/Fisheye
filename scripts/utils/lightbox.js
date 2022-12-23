// Lightbox

const artwork = document.querySelectorAll(".artwork ")
const lightbox = document.querySelector(".lightbox")
const lightboxCloseBtn = document.querySelector(".lightbox_close_button")


function addEventToMedias() {
    document.querySelectorAll(".artwork ").forEach(media =>
        media.addEventListener("click", (event) => {
            /*console.log(event.target.getAttribute("index"))*/
            lightbox.style.display = "flex";
            header.style.display = "none";
            main.style.display = "none";
            lightbox.setAttribute('aria-hidden', 'false')
            header.setAttribute('aria-hidden', 'true')
            main.setAttribute('aria-hidden', 'true')
            displayLightbox(media)
            console.log('coucou')
            /*lightboxCloseBtn.focus()*/
        }))
}

function displayLightbox(media) {
    galleryPhotographer = media
    let image = media.hasOwnProperty('image')
    let video = media.hasOwnProperty('video')
    console.log(media)
    if (image == true) {
        document.querySelector(".lightbox").innerHTML = lightboxImageFactory(media).getLightboxImageDOM();
        /*const lightbox = document.querySelector(".lightbox")
        const lightboxModel = lightboxImageFactory(media)
        lightbox.appendChild(lightboxModel.getLightboxImageDOM())*/
        console.log("image")
    } else if (video == true) {
        document.querySelector(".lightbox").innerHTML = lightboxVideoFactory(media).getLightboxVideoDOM();
        /*const lightbox = document.querySelector(".lightbox")
        const lightboxModelVideo = lightboxVideoFactory(media)
        lightbox.appendChild(lightboxModelVideo.getLightboxVideoDOM())*/
        console.log("video")
    }
};


function closeLightbox() {
    lightbox.style.display = "none";
    header.style.display = "block";
    main.style.display = "block";
    lightbox.setAttribute('aria-hidden', 'true')
    header.setAttribute('aria-hidden', 'false')
    main.setAttribute('aria-hidden', 'false')
}





