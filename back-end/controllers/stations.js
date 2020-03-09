const models = require("../models");
const Station = models.station;

exports.index = async (req, res) => {
  try {
    const data = await Station.findAll({
      order: [["city", "ASC"]],
      attributes: ["id", "name", "city"]
    });
    res.status(200).send({ status: true, message: "success", data });
  } catch (err) {
    res.status(404).send({ status: false });
  }
};
