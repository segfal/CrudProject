const express = require("express");
const db = require("./db");
const PORT = "8080";

const app = express();

//Mount on API
app.use("/api", require("./api"));

//FOR LATER WHEN DB IS SETUP
//const syncDB = () => db.sync({ force: true });

const serverRun = () => {
  app.listen(PORT, () => {
    console.log(`Live on port: ${PORT}`);
  });
};

//syncDB();
serverRun();

module.exports = app;
