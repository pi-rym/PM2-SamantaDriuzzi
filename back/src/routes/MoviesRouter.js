const { Router } = require("express");
const { getMoviesController } = require("../controllers/getMoviesController");
const {
  createMovieController,
} = require("../controllers/createMovieController");
const validator = require("../middleware/validator");
const router = Router();

router.get("/movies", getMoviesController);
router.post("/movies", validator, createMovieController);

module.exports = router;
