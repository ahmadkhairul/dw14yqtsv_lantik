"use strict";
module.exports = (sequelize, DataTypes) => {
  const ticket = sequelize.define(
    "ticket",
    {
      name: DataTypes.STRING,
      classType: DataTypes.ENUM(["Eksekutif", "Bisnis", "Ekonomi", "Premium"]),
      dateStart: DataTypes.DATE,
      startStation: DataTypes.STRING,
      startTime: DataTypes.DATE,
      destinationStation: DataTypes.STRING,
      arrivalTime: DataTypes.DATE,
      price: DataTypes.INTEGER,
      qty: DataTypes.INTEGER
    },
    {}
  );
  ticket.associate = function(models) {
    // associations can be defined here
  };
  return ticket;
};
