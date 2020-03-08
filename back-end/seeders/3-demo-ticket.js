"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "tickets",
      [
        {
          name: "Agro Willis",
          classType: 1,
          dateStart: new Date(),
          startStation: 1,
          startTime: new Date(),
          destinationStation: 2,
          arrivalTime: new Date(),
          price: 50000,
          qty: 30,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Agro Cherry",
          classType: 2,
          dateStart: new Date(),
          startStation: 4,
          startTime: new Date(),
          destinationStation: 5,
          arrivalTime: new Date(),
          price: 350000,
          qty: 60,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Agro Orga",
          classType: 2,
          dateStart: new Date(),
          startStation: 4,
          startTime: new Date(),
          destinationStation: 5,
          arrivalTime: new Date(),
          price: 300000,
          qty: 60,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("tickets", null, {});
  }
};
