"use strict";
module.exports = (sequelize, DataTypes) => {
  const station = sequelize.define(
    "station",
    {
      code: DataTypes.STRING,
      name: DataTypes.STRING,
      city: DataTypes.STRING
    },
    {}
  );
  station.associate = function(models) {
    // associations can be defined here
  };
  return station;
};
