const MovieC = require("./claseMovie");
const Movie = require("../models/Movie");

module.exports = {
  getMoviesService: async () => {
    try {
      const moviesData = await Movie.find().sort({ rate: -1 });

      const movies = moviesData
        .slice(0, 5)
        .map(
          ({ title, year, director, duration, genre, rate, poster }) =>
            new MovieC(title, year, director, duration, genre, rate, poster)
        );

      return movies;
    } catch (error) {
      throw error;
    }
  },
};
