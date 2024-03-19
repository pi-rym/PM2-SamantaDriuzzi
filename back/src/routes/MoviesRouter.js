const { Router } = require("express");
const { getMoviesController } = require("../controllers/getMoviesController");
const {
  createMovieController,
} = require("../controllers/createMovieController");
const router = Router();

router.get("/movies", getMoviesController);
router.post("/movies", createMovieController);

module.exports = router;
