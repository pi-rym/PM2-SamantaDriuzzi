const cardMovie = require("./cardMovie");

const axios = require("axios");

const getMovie = async () => {
  try {
    const response = await axios.get("http://localhost:3000/movies");
    cardMovie(response.data);
  } catch (err) {
    if (err.response.status === 404) {
      let fondo = "../../assets/fondoError.png";
      document.body.style.backgroundImage = `url('${fondo}')`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundRepeat = "no-repeat";
    } else {
      alert("Error: " + err.message);
    }
  }
};

module.exports = getMovie;
