// Implementar una función que maneje el evento de envío de formulario,
//  que por el momento se encargará de seleccionar los inputs,
//  y validar que todos los datos estén completos.
//  Asumimos para esta actividad que todos los datos son obligatorios.

function createMovie() {
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
    console.log("enviando");
  }
}
module.exports = createMovie;
