const express = require('express');
const app = express();
const PORT = "8080";
const cors = require('cors');
const db = require('./DB/db');

//Use Cors to allow cross origin resource sharing
app.use(cors());



// Mount on API
app.use("/Routes", require("./Routes"));

// Syncing DB Function
const syncDB = async () => await db.sync();

// Run server function
const serverRun = () => {
  app.listen(PORT, () => {
    console.log(`Live on port: ${PORT}`);
  });
};

syncDB(); //Check if a bug happens with the other db in DB/index.js
serverRun();

module.exports = app;