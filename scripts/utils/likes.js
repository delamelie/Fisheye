// Calculate total of likes for each photographer when loading page

function likesTotal() {
    let sumLikes = 0
    let likesNumberDiv = document.querySelectorAll(".likes-number")

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
                numberDiv.innerHTML = numberOfLikes + 1
                event.target.classList.replace("fa-regular", "fa-solid")
                totalLikesDiv.innerHTML = totalLikes + 1
            } else {
                numberDiv.innerHTML = numberOfLikes - 1
                event.target.classList.replace("fa-solid", "fa-regular")
                totalLikesDiv.innerHTML = totalLikes - 1
            }
            /*likesTotalStorage()*/
        }))
}

function heartIncrementKeyboard() {
    const heartIcon = document.querySelectorAll(".heart")
    heartIcon.forEach(like =>
        like.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.target.click();
            }
        }))
}


/*// Local storage for total number of likes

function likesTotalStorage() {

    let counter = document.querySelector(".total-likes-number").innerHTML
    window.localStorage.setItem("counter", JSON.parse(counter))
    counter = window.localStorage.getItem("counter")
    console.log(counter)
}*/