const axios = require("axios");
const Movie = require("./claseMovie");
require("dotenv").config();
const { BASE_URL } = process.env;

module.exports = {
  getMoviesService: async () => {
    try {
      const response = await axios.get(BASE_URL);
      const moviesData = response.data;

      const movies = moviesData.map(
        ({ title, year, director, duration, genre, rate, poster }) =>
          new Movie(title, year, director, duration, genre, rate, poster)
      );

      return movies;
    } catch (error) {
      throw error;
    }
  },
};
