const MovieC = require("./claseMovie");
const Movie = require("../models/Movie");

module.exports = {
  getMoviesService: async () => {
    try {
      const response = await Movie.find();
      const moviesData = response;

      const movies = moviesData.map(
        ({ title, year, director, duration, genre, rate, poster }) =>
          new MovieC(title, year, director, duration, genre, rate, poster)
      );

      return movies;
    } catch (error) {
      throw error;
    }
  },
};
