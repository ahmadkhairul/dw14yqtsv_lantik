const models = require("../models");
const Orders = models.order;
const Users = models.user;
const Tickets = models.ticket;
const Station = models.station;

exports.index = async (req, res) => {
  try {
    if (req.level == "Admin") {
      const data = await Orders.findAll({
        include: [
          {
            model: Users,
            as: "user",
            attributes: ["name", "email", "phone"]
          },
          {
            model: Tickets,
            as: "ticket",
            attributes: [
              "name",
              "dateStart",
              "classType",
              "startTime",
              "arrivalTime"
            ],
            include: [
              {
                model: Station,
                as: "start",
                attributes: ["code", "name", "city"]
              },
              {
                model: Station,
                as: "destination",
                attributes: ["code", "name", "city"]
              }
            ]
          }
        ],
        attributes: {
          exclude: ["userId", "ticketId", "createdAt", "updatedAt"]
        }
      });
      res.status(200).send({ status: true, message: "success", data });
    } else {
      res.status(401).send({ status: false });
    }
  } catch (err) {
    res.status(404).send({ status: false });
  }
};

exports.show = async (req, res) => {
  try {
    const userId = req.user;
    const data = await Orders.findAll({
      where: { userId },
      include: [
        {
          model: Users,
          as: "user",
          attributes: ["name"]
        },
        {
          model: Tickets,
          as: "ticket",
          attributes: ["name", "dateStart", "classType"],
          include: [
            {
              model: Station,
              as: "start",
              attributes: ["code", "name"]
            },
            {
              model: Station,
              as: "destination",
              attributes: ["code", "name"]
            }
          ]
        }
      ],
      attributes: {
        exclude: ["userId", "ticketId", "createdAt", "updatedAt"]
      }
    });
    res.status(200).send({ status: true, message: "success", data });
  } catch (err) {
    res.status(404).send({ status: false });
  }
};

exports.update = async (req, res) => {
  try {
    if (req.level == "Admin") {
      const { status } = req.body;
      const { id } = req.params;
      await Orders.update({ status }, { where: { id } });
      res
        .status(200)
        .send({ status: true, message: "update success", data: id });
    } else {
      res.status(401).send({ status: false });
    }
  } catch (err) {
    console.log(req.body);
    console.log(req.params.id);
    res.status(404).send({
      status: false,
      data: { message: "Authorization not Allowed" }
    });
  }
};

exports.destroy = async (req, res) => {
  try {
    const { id } = req.params;
    if (req.level == "Admin") {
      await Orders.destroy({ where: { id } });
      res.status(200).send({
        status: true,
        message: "delete success",
        data: id
      });
    } else {
      res.status(401).send({ status: false });
    }
  } catch (err) {
    res.status(404).send({ status: false });
  }
};
