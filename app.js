const express = require("express");
const mongoose = require("mongoose");
const app = express();

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    console.log("DB Connection successful");
  });

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello" });
});

const port = 8000;

app.listen(port, () => {
  console.log(`birthday app running on port ${port}`);
});
