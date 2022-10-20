const userModel = require("./../models/user");

exports.generateUserLink = async (req, res) => {
  try {
    const newUser = await userModel.create(req.body);
    res.status(201).json({
      status: "success",
      res: newUser,
    });
  } catch (err) {
    console.log(err);
  }
};
