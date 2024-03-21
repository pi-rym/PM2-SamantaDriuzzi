const validator = (req, res, next) => {
  const { title, year, director, duration, genre, rate, poster } = req.body;

  if (!title || !year || !director || !duration || !genre || !rate || !poster) {
    return res.status(400).json({ error: "Todos los datos son obligatorios" });
  }

  if (year.toString().length !== 4) {
    return res
      .status(400)
      .json({ error: "El año debe ser un número de 4 dígitos" });
  }

  if (rate < 0 || rate > 10) {
    return res
      .status(400)
      .json({ error: "El puntaje debe ser un número entre 0 y 10" });
  }
  next();
};

module.exports = validator;
