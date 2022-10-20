const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const userRoutes = require("./routes/user");

app.use(express.json());

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then((con) => {
    console.log(con.connections);
    console.log("DB Connection successful");
  })
  .catch((err) => {
    console.log("ERROR :", err);
  });

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello" });
});

app.use("/", userRoutes);

const port = 8000;

app.listen(port, () => {
  console.log(`birthday app running on port ${port}`);
});
