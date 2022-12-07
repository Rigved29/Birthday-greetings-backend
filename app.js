const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const userRoutes = require("./routes/user");

app.use(express.json());

// For resolving cors problem
var allowCrossDomain = function (req, res, next) {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000"); //https://birthday-wish-alpha.vercel.app
  // res.set(
  //   "Access-Control-Allow-Origin",
  //   `https://birthday-wish-alpha.vercel.app`
  // );
  res.set("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.set(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.set("Access-Control-Allow-Credentials", true);
  next();
};

app.use(allowCrossDomain);

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
    // console.log(con.connections);
    console.log("DB Connection successful");
  })
  .catch((err) => {
    console.log("ERROR :", err);
  });

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello" });
});

app.use("/", userRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`birthday app running on port ${port}`);
});
