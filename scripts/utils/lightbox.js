// Lightbox

const artwork = document.querySelectorAll(".artwork ")
const lightbox = document.querySelector(".lightbox")

/*function openLightbox() {
    console.log("coucou")
    lightbox.style.display = "block";
    header.setAttribute('aria-hidden', 'true')
    main.setAttribute('aria-hidden', 'true')
    header.classList.add("opacity")
    main.classList.add("opacity")
};*/



document.querySelectorAll(".artwork ").forEach(media =>
    media.addEventListener("click", (event) => {
        console.log(event.target)
        console.log("bonjour")
        lightbox.style.display = "flex";
        header.style.display = "none";
        main.style.display = "none";
        lightbox.setAttribute('aria-hidden', 'false')
        header.setAttribute('aria-hidden', 'true')
        main.setAttribute('aria-hidden', 'true')
        console.log("bravo")
    }))

function closeLightbox() {
    lightbox.style.display = "none";
    header.style.display = "block";
    main.style.display = "block";
    lightbox.setAttribute('aria-hidden', 'true')
    header.setAttribute('aria-hidden', 'false')
    main.setAttribute('aria-hidden', 'false')
}





