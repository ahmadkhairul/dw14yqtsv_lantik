"use strict";
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    "order",
    {
      ticketId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      transferProof: DataTypes.STRING,
      status: DataTypes.ENUM("Pending", "Approve", "Cancel"),
      qty: DataTypes.INTEGER,
      totalPrice: DataTypes.INTEGER
    },
    {}
  );
  order.associate = function(models) {
    order.belongsTo(models.user, {
      as: "user",
      foreignKey: "userId"
    });
    order.belongsTo(models.ticket, {
      as: "ticket",
      foreignKey: "ticketId"
    });
  };
  return order;
};
