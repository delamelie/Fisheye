// Create html layout for homepage

function photographerFactory(data) {

    const { name, id, portrait, country, city, tagline, price } = data
    const picture = `assets/photographers/Photographers_ID/${portrait}`

    function getUserCardDOM() {
        const article = document.createElement('article')
        const link = document.createElement('a')
        const img = document.createElement('img')
        const h2 = document.createElement('h2')
        const h3 = document.createElement('h3')
        const h4 = document.createElement('h4')
        const p = document.createElement('p')
        article.appendChild(link)
        link.appendChild(img)
        link.appendChild(h2)
        article.appendChild(h3)
        article.appendChild(h4)
        article.appendChild(p)
        link.setAttribute('href', `photographer.html?id=${id}`)
        img.setAttribute('src', picture)
        img.setAttribute('alt', `Photo de profil du photographe ${name}.Cliquez sur la photo pour accéder à la page du photographe`)
        h2.textContent = name
        h3.textContent = `${city}, ${country}`
        h4.textContent = tagline
        p.textContent = `${price}€/jour`
        return (article)
    }
    return { name, id, picture, country, city, tagline, price, getUserCardDOM }
}



