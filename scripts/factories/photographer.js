function photographerFactory(data){

    const {name, portrait, country, city, tagline, price} = data;
    const picture = `assets/photographers/Photographers_ID/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        const img = document.createElement('img');
        const h2 = document.createElement('h2');
        const h3 = document.createElement('h3');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(p);
        img.setAttribute('src', picture)
        img.setAttribute('alt', `${name}`)
        h2.textContent = `${name}`;       
        h3.textContent = `${city}, ${country}`;    
        h4.textContent = `${tagline}`;
        p.textContent = `${price}€/jour`;
        return (article);
    }
    return {name, picture, country, city, tagline, price, getUserCardDOM}
}


