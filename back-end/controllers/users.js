const models = require("../models");
const User = models.user;

exports.show = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await User.findOne({
      where: { id },
      attributes: {
        exclude: ["id", "password", "createdAt", "updatedAt"]
      }
    });
    res.status(200).send({ status: true, message: "success", data });
  } catch (err) {
    res.status(404).send({ status: false });
  }
};

exports.showAll = async (req, res) => {
  try {
    const data = await User.findAll({
      where: { level: "User" },
      attributes: {
        exclude: ["id", "password", "level", "createdAt", "updatedAt"]
      }
    });
    res.status(200).send({ status: true, message: "success", data });
  } catch (err) {
    res.status(404).send({ status: false });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.user;
    if (id == user) {
      const data = await User.update(req.body, { where: { id } });
      res
        .status(200)
        .send({ status: true, message: "update success", data: id });
    } else {
      res.status(401).send({
        status: false,
        data: id
      });
    }
  } catch (err) {
    res.status(404).send({
      status: false,
      data: { message: "Authorization not Allowed" }
    });
  }
};

exports.destroy = async (req, res) => {
  try {
    const id = req.params.id;
    const user = req.user;
    if (id == user) {
      const data = await User.destroy({ where: { id } });
      res.status(200).send({
        status: true,
        message: "delete success",
        data: id
      });
    } else {
      res.status(401).send({ status: false, message: "delete failed" });
    }
  } catch (err) {
    res.status(404).send({ status: false });
  }
};
