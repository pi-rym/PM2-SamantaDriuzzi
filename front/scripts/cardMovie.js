const movieCardsContainer = document.getElementById("movieCardsContainer");

const additionalImages = [
  "../assets/number1.png",
  "../assets/number2.png",
  "../assets/number3.png",
  "../assets/number4.png",
  "../assets/number5.png",
];

const cardMovie = (data) => {
  data.forEach((movie, index) => {
    const containerCard = document.createElement("div");
    containerCard.classList.add("containerCard");

    const card = document.createElement("div");
    card.classList.add("cardMovie");

    const img = document.createElement("img");
    img.src = movie.poster;
    img.alt = `${movie.title} Poster`;
    img.classList.add("poster");
    card.appendChild(img);

    const nameParagraph = document.createElement("p");
    nameParagraph.textContent = movie.title.toUpperCase();
    nameParagraph.classList.add("nameMovie");
    card.appendChild(nameParagraph);

    const imgNumber = document.createElement("img");
    imgNumber.src = additionalImages[index % additionalImages.length];
    imgNumber.classList.add("imgNumber");
    containerCard.appendChild(imgNumber);

    const detailsContainer = document.createElement("div");
    detailsContainer.classList.add("detailsContainer");
    card.appendChild(detailsContainer);

    const directorParagraph = document.createElement("p");
    directorParagraph.textContent = `Director: ${movie.director}`;
    detailsContainer.appendChild(directorParagraph);

    const yearParagraph = document.createElement("p");
    yearParagraph.textContent = `Año: ${movie.year}`;
    detailsContainer.appendChild(yearParagraph);

    const genresParagraph = document.createElement("p");
    genresParagraph.textContent = `Géneros: ${movie.genre.join(", ")}`;
    detailsContainer.appendChild(genresParagraph);

    containerCard.appendChild(card);

    movieCardsContainer.appendChild(containerCard);
  });
};
module.exports = cardMovie;
