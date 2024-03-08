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
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = movie.poster;
    img.alt = `${movie.title} Poster`;
    img.classList.add("poster");
    card.appendChild(img);

    const nameParagraph = document.createElement("p");
    nameParagraph.textContent = movie.title;
    nameParagraph.classList.add("name");
    card.appendChild(nameParagraph);

    const additionalImage = document.createElement("img");
    additionalImage.src = additionalImages[index % additionalImages.length];
    additionalImage.classList.add("additional-image");
    containerCard.appendChild(additionalImage);

    containerCard.appendChild(card);

    movieCardsContainer.appendChild(containerCard);
  });
};
module.exports = cardMovie;