const { Router } = require("express");
const { getMoviesController } = require("../controllers/getMoviesController");
const router = Router();

router.get("/movies", getMoviesController);

module.exports = router;
