// Retrieve photographers data

function fetchData() {
	fetch('./data/photographers.json')
		.then((response) => response.json())
		.then((data) => displayData(data.photographers))
		.catch((error) => console.log("Erreur"));
}
fetchData()


// Display photographers data

async function displayData(photographers) {
	const photographersSection = document.querySelector(".photographer_section");

	photographers.forEach((photographer) => {
		const photographerModel = photographerFactory(photographer);
		const userCardDOM = photographerModel.getUserCardDOM();
		photographersSection.appendChild(userCardDOM);
	});
};










