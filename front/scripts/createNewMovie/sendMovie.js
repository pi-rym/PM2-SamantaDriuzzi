// Implementar una función que maneje el evento de envío de formulario,
//  que por el momento se encargará de seleccionar los inputs,
//  y validar que todos los datos estén completos.
//  Asumimos para esta actividad que todos los datos son obligatorios.

const axios = require("axios");

function sendMovie() {
  const title = document.getElementById("title").value;
  const year = document.getElementById("year").value;
  const director = document.getElementById("director").value;
  const duration = document.getElementById("duration").value;
  const genre = document.getElementById("genre").value;
  const rate = document.getElementById("rate").value;
  const poster = document.getElementById("poster").value;

  if (!title || !year || !director || !duration || !genre || !rate || !poster) {
    alert("Todos los campos son obligatorios");
  } else {
    axios.post("http://localhost:3000/movies", {
      title,
      year,
      director,
      duration,
      genre,
      rate,
      poster,
    });

    alert("Película agregada");
  }
}
module.exports = sendMovie;
