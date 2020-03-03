"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      photo: DataTypes.STRING,
      level: DataTypes.ENUM(["User", "Admin"])
    },
    {}
  );
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};
