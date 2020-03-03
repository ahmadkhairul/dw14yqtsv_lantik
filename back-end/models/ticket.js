"use strict";
module.exports = (sequelize, DataTypes) => {
  const ticket = sequelize.define(
    "ticket",
    {
      name: DataTypes.STRING,
      classType: DataTypes.ENUM(["Eksekutif", "Bisnis", "Ekonomi", "Premium"]),
      dateStart: DataTypes.DATEONLY,
      startStation: DataTypes.STRING,
      startTime: DataTypes.TIME,
      destinationStation: DataTypes.STRING,
      arrivalTime: DataTypes.TIME,
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
