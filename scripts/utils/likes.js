// Calculate total likes

function likesTotal() {
    let sumLikes = 0
    let likesNumberDiv = document.querySelectorAll(".likes-number");

    likesNumberDiv.forEach((like) => {
        let likes = parseInt(like.innerHTML)
        sumLikes += likes
    });
    return sumLikes
}