const movieCardsContainer = document.getElementById("movieCardsContainer");

$.get("https://students-api.2.us-1.fl0.io/movies", (data) => {
  cardMovie(data);
});

const cardMovie = (data) => {
  data.forEach((movie, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const numberContainer = document.createElement("span");
    numberContainer.classList.add("number");
    numberContainer.textContent = index + 1;
    card.appendChild(numberContainer);

    const img = document.createElement("img");
    img.src = movie.poster;
    img.alt = `${movie.title} Poster`;
    card.appendChild(img);

    const nameParagraph = document.createElement("p");
    nameParagraph.textContent = movie.title;
    nameParagraph.classList.add("name");
    card.appendChild(nameParagraph);

    movieCardsContainer.appendChild(card);
  });
};
