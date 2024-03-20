const axios = require("axios");

function sendMovie() {
  const title = document.getElementById("title").value;
  const year = document.getElementById("year").value;
  const director = document.getElementById("director").value;
  const duration = document.getElementById("duration").value;
  const genreCheckboxes = document.querySelectorAll(
    'input[type="checkbox"][name="genre"]:checked'
  );
  const rate = document.getElementById("rate").value;
  const poster = document.getElementById("poster").value;

  if (
    !title ||
    !year ||
    !director ||
    !duration ||
    genreCheckboxes.length === 0 ||
    !rate ||
    !poster
  ) {
    alert("Todos los campos son obligatorios");
  } else {
    const genres = Array.from(genreCheckboxes)
      .map((checkbox) => checkbox.value)
      .join(", ");

    axios.post("http://localhost:3000/movies", {
      title,
      year,
      director,
      duration,
      genre: genres,
      rate,
      poster,
    });

    alert("Película agregada. Ya puedes verla en la página del TOP 5!");
  }
}

module.exports = sendMovie;
