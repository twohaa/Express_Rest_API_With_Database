const mongoose = require("mongoose");
const config = require("./config");

const dbURL = config.db.url;

mongoose
  .connect(dbURL)
  .then(() => {
    console.log("Connected database...");
  })
  .catch((e) => {
    console.log("Error..: " + e);
    process.exit(1);
  });
