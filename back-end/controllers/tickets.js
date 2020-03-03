const models = require("../models");
const Ticket = models.ticket;

exports.index = async (req, res) => {
  try {
    const data = await Ticket.findAll({
      attributes: {
        exclude: ["id", "createdAt", "updatedAt"]
      }
    });
    res.status(200).send({ status: true, message: "success", data });
  } catch (err) {
    res.status(404).send({ status: false });
  }
};
