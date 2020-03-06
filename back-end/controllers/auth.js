const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const models = require("../models");
const User = models.user;

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (user) {
      const result = await bcrypt.compare(password, user.password);
      if (result) {
        const token = jwt.sign({ user_id: user.id }, process.env.SECRET_KEY);
        res.status(200).send({ status: true, data: { username, token } });
      } else {
        res.status(401).send({ status: false, data: {} });
      }
    } else {
      res.status(401).send({ status: false, data: {} });
    }
  } catch (err) {
    res.status(404).send({ status: false });
  }
};

exports.register = async (req, res) => {
  try {
    const password = await bcrypt.hashSync(req.body.password, 10);
    const { name, username, email, gender, phone, address } = req.body;
    const level = "user";

    const check = await User.findOne({ where: { username } });
    if (check) {
      res
        .status(401)
        .send({ status: false, data: { message: "username already taken" } });
    } else {
      const user = await User.create({
        name,
        username,
        email,
        password,
        phone,
        gender,
        address,
        level
      });

      if (user) {
        const token = jwt.sign({ user_id: user.id }, process.env.SECRET_KEY);
        res.status(200).send({
          status: true,
          message: "success",
          data: { username, token }
        });
      } else {
        res.status(401).send({ status: false, data: {} });
      }
    }
  } catch (err) {
    res.status(404).send({ status: false });
  }
};

exports.auth = async (req, res) => {
  try {
    const id = req.user;
    const data = await User.findOne({
      where: { id },
      attributes: {
        exclude: ["id", "password", "createdAt", "updatedAt"]
      }
    });
    if (data) {
      res.status(200).send({ status: true, message: "succes", data });
    } else {
      res
        .status(404)
        .send({ status: false, message: "user not found", data: {} });
    }
  } catch (err) {
    res
      .status(404)
      .send({ status: false, message: "Authorization not Allowed" });
  }
};
