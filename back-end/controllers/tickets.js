const { Op } = require("sequelize");
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

exports.search = async (req, res) => {
  try {
    const { dateStart, startStation, destinationStation, qty } = req.body;
    const data = await Ticket.findAll({
      where: {
        dateStart: {
          [Op.gt]: dateStart
        },
        startStation: {
          [Op.like]: startStation
        },
        destinationStation: {
          [Op.like]: destinationStation
        },
        qty: {
          [Op.gt]: qty
        }
      }
    });
    if (data) {
      res.status(200).send({ status: true, message: "success", data });
    } else {
      res.status(404).send({ status: false, message: "ticket not found" });
    }
  } catch (err) {
    res.status(404).send({ status: false });
  }
};
