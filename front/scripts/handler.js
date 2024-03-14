const cardMovie = require("./cardMovie");

const axios = require("axios");

// const promise = axios.get(" https://students-api.up.railway.app/movies");
//
// promise
//   .then((response) => {
//     cardMovie(response.data);
//   })
//   .cath((err) => {
//     console.error(err);
//     alert("Error: " + err.message);
//   });

const getMovie = async () => {
  try {
    const response = await axios.get("http://localhost:3000/movies");
    cardMovie(response.data);
  } catch (err) {
    //si el error es 404
    if (err.response.status === 404) {
      let fondo = "../../assets/fondoError.png";
      document.body.style.backgroundImage = `url('${fondo}')`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundRepeat = "no-repeat";
    }
    //si no mostrar alerta con el error
    else {
      alert("Error: " + err.message);
    }
  }
};

module.exports = getMovie;
