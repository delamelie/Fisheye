// Display photographer's data

function displayPhotographerData(profile) {
    //Display header
    const photographerHeader = document.querySelector(".header-main-photographer")
    photographerHeader.innerHTML = photographerPageFactory(profile).getPhotographerDOM()

    // Display photographer's name in modal
    const modalHeader = document.querySelector(".form-header")
    const modalModel = modalFactory(profile);
    modalHeader.appendChild(modalModel.getModalDOM())

    // Display label
    const label = document.querySelector(".label")
    label.innerHTML = labelFactory(profile).getLabelDOM()
    let totalLikesDiv = document.querySelector(".total-likes-number")
    totalLikesDiv.innerHTML = likesTotal()
};


// Display gallery - à revoir

let galleryPhotographer

/*function displayMedia(medias) {
    galleryPhotographer = medias
    fillPage(medias)
}*/

function displayMedia(medias) {
    galleryPhotographer = medias
    fillPage(medias)

    // Likes count for each media

    const heartIcon = document.querySelectorAll(".heart")
    /*let totalLikesDiv = document.querySelector(".total-likes-number")*/
    /*let total = parseInt(totalLikesDiv.innerHTML)*/

    function heartIncrement() {
        heartIcon.forEach(like =>
            like.addEventListener("click", (event) => {
                console.log(event.target)
                let numberDiv = event.target.previousElementSibling
                event.target.classList.toggle("liked")
                let numberOfLikes = parseInt(numberDiv.innerHTML)
                if (event.target.classList.contains("liked")) {
                    /*numberOfLikes++*/
                    let increment = numberOfLikes + 1
                    /*let incrementTotal = total + 1*/
                    numberDiv.innerHTML = increment
                    event.target.classList.replace("fa-regular", "fa-solid");
                    /*totalLikesDiv.innerHTML = incrementTotal*/
                } else {
                    /*numberOfLikes--*/
                    let increment = numberOfLikes - 1
                    numberDiv.innerHTML = increment
                    event.target.classList.replace("fa-solid", "fa-regular");
                    /*totalLikesDiv.innerHTML = increment*/
                }
                likesTotal()
                console.log(likesTotal())
            }))
    }
    heartIncrement()

    heartIcon.forEach(like =>
        like.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                event.target.click();
            }
        }));


    /*
       for (i = 0; i < likeHeart.length; i++) {
           likeHeart[i].addEventListener('click', incrementLikes);
       }
       /*for (var i = 0; i < likeHeart.length; i++) {
           likeHeart[i].addEventListener('click', function () {
               numberOfLikes++;
               likesNumber.innerHTML = numberOfLikes;
               console.log('salut')
               document.querySelectorAll(".like-heart")[i].style.display = "none";
               document.querySelectorAll(".dislike-heart")[i].style.display = "block";
               document.querySelector(".likes-total").innerHTML = numberOfLikes
           });
       }*/

}


function fillPage(medias) {
    const pictureGallery = document.querySelector(".picture-gallery");
    medias.forEach((media) => {
        let image = media.hasOwnProperty('image')
        let video = media.hasOwnProperty('video')
        if (image == true) {
            const mediaPageModel = mediaFactory(media);
            pictureGallery.appendChild(mediaPageModel.getMediaDOM())
        } else if (video == true) {
            const videoPageModel = videoFactory(media);
            pictureGallery.appendChild(videoPageModel.getVideoDOM())
        }
    });
};


// Display lightbox

function displayLightbox(medias) {
    galleryPhotographer = medias
    medias.forEach((media) => {
        let image = media.hasOwnProperty('image')
        let video = media.hasOwnProperty('video')
        if (image == true) {
            document.querySelector(".lightbox").innerHTML = lightboxImageFactory(media).getLightboxImageDOM();
            console.log("coucou")
        } else if (video == true) {
            document.querySelector(".lightbox").innerHTML = lightboxVideoFactory(media).getLightboxVideoDOM();
            console.log("hej")
        }
    });
};

















