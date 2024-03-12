const { Router } = require("express");
const { getMoviesController } = require("../controllers/getMoviesController");
const router = Router();

router.get("/", getMoviesController);

module.exports = router;
