const express = require("express");
const userController = require("./../controllers/userController");
const userModel = require("./../models/user");
const router = express.Router();

router.route("/userlink").post(async (req, res) => {
  const user1 = new userModel(req.body);

  // console.log(req.body);

  try {
    const savedUser = await user1.save();
    res.status(200).json(savedUser);
    console.log(savedUser);
  } catch (err) {
    console.log(err);
  }
});

router.route("/userInfo/:id").get(async (req, res) => {
  let res_User;
  try {
    console.log("REQ_Params", req.params);
    res_User = await userModel.findById({
      _id: req.params.id,
    });

    res.status(200).json(res_User);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("RES_USER", res_User);
    if (!res_User) return res.status(404).send("not found");
  }
});

module.exports = router;
