const express = require("express");
const userController = require("./../controllers/userController");
const userModel = require("./../models/user");
const router = express.Router();

router.route("/userlink").post(async (req, res) => {
  const user1 = new userModel(req.body);
  try {
    const savedUser = await user1.save();
    res.status(200).json(savedUser);

    // const newUser = await userModel.create(req.body);
    // res.status(201).json({
    //   status: "success",
    //   res: newUser,
    // });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
