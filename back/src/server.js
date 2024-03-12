const express = require("express");
const router = require("./routes/getMoviesRouter");
const app = express();

app.use(router);

module.exports = app;
