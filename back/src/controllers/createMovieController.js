const { createMovie } = require("../services/createMovieService");

module.exports = {
  createMovieController: async (req, res) => {
    try {
      const { title, year, director, duration, genre, rate, poster } = req.body;
      const newMovie = await createMovie({
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster,
      });
      res.status(201).json(newMovie);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
