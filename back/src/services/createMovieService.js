const Movie = require("../models/Movie");

module.exports = {
  createMovie: async (movie) => {
    try {
      const newMovie = await Movie.create(movie);
      return newMovie;
    } catch (error) {
      throw error;
    }
  },
};
