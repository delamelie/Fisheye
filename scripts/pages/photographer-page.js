// Display photographers data

function displayPhotographerData(profile) {
    const photographerHeader = document.querySelector(".header-main-photographer")
    const photographerPageModel = photographerPageFactory(profile);
    const photographerPageDOM = photographerPageModel.getPhotographerDOM();
    photographerHeader.innerHTML = photographerPageDOM;

    const label = document.querySelector(".label")
    const labelModel = labelFactory(profile);
    const labelDOM = labelModel.getLabelDOM();
    label.innerHTML = labelDOM;

    const modalHeader = document.querySelector(".form-header")
    const modalModel = modalFactory(profile);
    const modalDOM = modalModel.getModalDOM();
    modalHeader.appendChild(modalDOM);
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
    likesTotal()

    // Likes count for each media

    const heartIcon = document.querySelectorAll(".heart")

    heartIcon.forEach(like =>
        like.addEventListener("click", (event) => {
            /*console.log(event.target)*/
            let numberDiv = event.target.previousElementSibling
            event.target.classList.toggle("liked")
            let numberOfLikes = parseInt(numberDiv.innerHTML)
            console.log(numberOfLikes)
            if (event.target.classList.contains("liked")) {
                /*numberOfLikes++*/
                let increment = numberOfLikes + 1
                numberDiv.innerHTML = increment
                event.target.classList.replace("fa-regular", "fa-solid");
            } else {
                /*numberOfLikes--*/
                let increment = numberOfLikes - 1
                numberDiv.innerHTML = increment
                event.target.classList.replace("fa-solid", "fa-regular");
            }
        }))

    heartIcon.forEach(like =>
        like.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                event.target.click();
            }
        }));

    // Total likes counter

    function likesTotal() {
        let sumLikes = 0
        let likesNumberDiv = document.querySelectorAll(".likes-number");

        likesNumberDiv.forEach((like) => {
            let likes = parseInt(like.innerHTML)
            /*let likes = parseInt(likesNumberDiv.innerHTML)*/
            sumLikes += likes
        });
        console.log(sumLikes);
        return sumLikes
    }

    /*function displayChiffre() {
        let totalLikes = document.querySelector(".number")
        totalLikes.innerHTML = sumLikes
        /*totalLikes.innerHTML = likesNumberDiv.value
        console.log(totalLikes)
        console.log("coucou")
    }
    displayChiffre()*/

    /*let totalLikes = document.querySelector(".total-likes")
    totalLikes.textContent = "sumLikes"*/







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
            const mediaPageDOM = mediaPageModel.getMediaDOM();
            /*pictureGallery.innerHTML = mediaPageDOM;*/
            pictureGallery.appendChild(mediaPageDOM)
        } else if (video == true) {
            const videoPageModel = videoFactory(media);
            const videoPageDOM = videoPageModel.getVideoDOM();
            pictureGallery.appendChild(videoPageDOM)
        }
    });
};






