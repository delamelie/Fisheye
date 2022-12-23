// Calculate total of likes for each photographer

function likesTotal() {
    let sumLikes = 0
    let likesNumberDiv = document.querySelectorAll(".likes-number");

    likesNumberDiv.forEach((like) => {
        let likes = parseInt(like.innerHTML)
        sumLikes += likes
    });
    return sumLikes
}


// Likes count for each media

function heartIncrement() {
    const heartIcon = document.querySelectorAll(".heart")
    heartIcon.forEach(like =>
        like.addEventListener("click", (event) => {
            let numberDiv = event.target.previousElementSibling
            let totalLikesDiv = document.querySelector(".total-likes-number")
            event.target.classList.toggle("liked")
            let numberOfLikes = parseInt(numberDiv.innerHTML)
            let totalLikes = parseInt(totalLikesDiv.innerHTML)
            if (event.target.classList.contains("liked")) {
                /*numberOfLikes++*/
                let increment = numberOfLikes + 1
                numberDiv.innerHTML = increment
                event.target.classList.replace("fa-regular", "fa-solid");
                totalLikesDiv.innerHTML = totalLikes + 1
            } else {
                /*numberOfLikes--*/
                let increment = numberOfLikes - 1
                numberDiv.innerHTML = increment
                event.target.classList.replace("fa-solid", "fa-regular");
                totalLikesDiv.innerHTML = totalLikes - 1
            }
            /*likesTotal()*/
        }))
}


function heartIncrementKeybord() {
    const heartIcon = document.querySelectorAll(".heart")
    heartIcon.forEach(like =>
        like.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                event.target.click();
            }
        }));
}



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