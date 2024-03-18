const app = require("./src/server");
const dbCon = require("./src/config/dbCon");

dbCon()
  .then((res) => {
    app.listen(3000, () => {
      console.log("Server on port 3000");
    });
  })
  .catch((err) => {
    console.error(err);
    alert("Error: " + err.message);
  });
