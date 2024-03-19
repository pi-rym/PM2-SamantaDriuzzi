module.exports = {
  entry: {
    index: "./scripts/index.js",
    btnClear: "./scripts/createMovie/btnClear.js",
    btnSubmit: "./scripts/createMovie/btnSubmit.js",
  },
  output: {
    path: __dirname + "/public",
    filename: "[name].bundle.js",
  },
  mode: "development",
};
