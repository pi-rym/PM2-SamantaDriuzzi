const { getMoviesService } = require("../services/getMoviesService");
module.exports = {
  getMoviesController: async (req, res) => {
    try {
      const movies = await getMoviesService();
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
