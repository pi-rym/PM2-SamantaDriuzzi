const cardMovie = require("./cardMovie");

const getMovie = () => {
  $.get("https://students-api.2.us-1.fl0.io/movies", (data) => {
    cardMovie(data);
  });
};
module.exports = getMovie;
