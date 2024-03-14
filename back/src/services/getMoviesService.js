const axios = require("axios");

class Movie {
  constructor(title, year, director, duration, genre, rate, poster) {
    if (!title || !poster || !director) {
      throw new Error("Title, poster, and director are required.");
    }

    this.title = title;
    this.year = year;
    this.director = director;
    this.duration = duration;
    this.genre = genre;
    this.rate = rate;
    this.poster = poster;
  }
}

module.exports = {
  getMoviesService: async () => {
    try {
      const response = await axios.get(
        "https://students-api.up.railway.app/movies"
      );
      const moviesData = response.data;

      // Mapear los datos de la película a objetos Movie
      const movies = moviesData.map(
        ({ title, year, director, duration, genre, rate, poster }) =>
          new Movie(title, year, director, duration, genre, rate, poster)
      );

      return movies;
    } catch (error) {
      // Lanzar el error original para mantener la traza de error completa
      throw error;
    }
  },
};
