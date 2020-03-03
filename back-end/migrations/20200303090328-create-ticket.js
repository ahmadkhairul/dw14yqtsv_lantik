"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("tickets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      classType: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ["Eksekutif", "Bisnis", "Ekonomi", "Premium"],
        defaultValue: "Ekonomi"
      },
      dateStart: {
        allowNull: false,
        type: Sequelize.DATEONLY,
        get: function() {
          return moment.utc(this.getDataValue("regDate")).format("DD-MM-YYYY");
        }
      },
      startStation: {
        allowNull: false,
        type: Sequelize.STRING
      },
      startTime: {
        allowNull: false,
        type: Sequelize.TIME,
        get: function() {
          return moment.utc(this.getDataValue("regDate")).format("HH-MM");
        }
      },
      destinationStation: {
        allowNull: false,
        type: Sequelize.STRING
      },
      arrivalTime: {
        allowNull: false,
        type: Sequelize.TIME,
        get: function() {
          return moment.utc(this.getDataValue("regDate")).format("HH-MM");
        }
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      qty: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tickets");
  }
};
