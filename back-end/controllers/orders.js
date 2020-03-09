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
  } catch (err) {
    res.status(404).send({ status: false });
  }
};

exports.showId = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Orders.findOne({
      where: { id },
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
  } catch (err) {
    res.status(404).send({ status: false });
  }
};

exports.update = async (req, res) => {
  try {
    if (req.level == "Admin") {
      const { id } = req.params;
      const { status } = req.body;
      await Orders.update({ status }, { where: { id } });
      res
        .status(200)
        .send({ status: true, message: "update success", data: id });
    } else {
      res.status(401).send({ status: false });
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

exports.save = async (req, res) => {
  try {
    const userId = req.user;
    const status = "Pending";
    const { ticketId, qty, price } = req.body;
    transferProof = "default.jpg";
    const totalPrice = qty * price;

    await Orders.create({
      ticketId,
      userId,
      status,
      transferProof,
      qty,
      totalPrice
    });

    const cTQ = await Tickets.findOne({ where: { id: ticketId } });
    const totalQty = cTQ.qty - qty;

    await Tickets.update({ qty: totalQty }, { where: { id: ticketId } });

    res.status(200).send({
      status: true,
      message: "success",
      data: { userId, ticketId, totalQty }
    });
  } catch (err) {
    res.status(404).send({ status: false });
  }
};
