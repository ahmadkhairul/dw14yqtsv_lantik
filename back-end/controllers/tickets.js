const { Op } = require("sequelize");
const models = require("../models");
const Ticket = models.ticket;
const Station = models.station;

exports.index = async (req, res) => {
  try {
    const data = await Ticket.findAll({
      include: [
        {
          model: Station,
          as: "start",
          attributes: ["name"]
        },
        {
          model: Station,
          as: "destination",
          attributes: ["name"]
        }
      ],
      attributes: {
        exclude: [
          "destinationStation",
          "startStation",
          "createdAt",
          "updatedAt"
        ]
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

    if (startStation == "") {
      start = "%%";
    } else {
      start = startStation;
    }

    if (destinationStation == "") {
      destination = "%%";
    } else {
      destination = destinationStation;
    }

    const data = await Ticket.findAll({
      where: {
        dateStart: {
          [Op.gt]: dateStart
        },
        startStation: {
          [Op.like]: start
        },
        destinationStation: {
          [Op.like]: destination
        },
        qty: {
          [Op.gt]: qty
        }
      },
      include: [
        {
          model: Station,
          as: "start",
          attributes: ["name"]
        },
        {
          model: Station,
          as: "destination",
          attributes: ["name"]
        }
      ],
      attributes: {
        exclude: [
          "destinationStation",
          "startStation",
          "createdAt",
          "updatedAt"
        ]
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

exports.save = async (req, res) => {
  try {
    if (req.level == "Admin") {
      const {
        name,
        classType,
        dateStart,
        startStation,
        startTime,
        destinationStation,
        arrivalTime,
        price,
        qty
      } = req.body;

      const ticket = await Ticket.create({
        name,
        classType,
        dateStart,
        startStation,
        startTime,
        destinationStation,
        arrivalTime,
        price,
        qty
      });
      if (ticket) {
        res.status(200).send({
          status: true,
          message: "success",
          data: { name, classType }
        });
      } else {
        res
          .status(400)
          .send({ status: false, message: "unknown error occured" });
      }
    } else {
      res.status(401).send({ status: false });
    }
  } catch (err) {
    res.status(404).send({ status: false });
  }
};
