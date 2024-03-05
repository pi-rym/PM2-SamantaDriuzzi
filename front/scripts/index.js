const movieCardsContainer = document.getElementById("movieCardsContainer");

const movies = tempData;

movies.forEach((movie) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = movie.poster;
  img.alt = `${movie.title} Poster`;

  const nameParagraph = document.createElement("p");
  nameParagraph.textContent = movie.title;
  nameParagraph.classList.add("name");

  card.appendChild(img);
  card.appendChild(nameParagraph);

  movieCardsContainer.appendChild(card);
});
