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
          startStation: "Stasiun Manggarai",
          startTime: new Date(),
          destinationStation: "Stasiun Surabaya Pasarturi",
          arrivalTime: new Date(),
          price: 10000,
          qty: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Argo Cherry",
          classType: 2,
          dateStart: new Date(),
          startStation: "Stasiun Manggarai",
          startTime: new Date(),
          destinationStation: "Stasiun Surabaya Pasarturi",
          arrivalTime: new Date(),
          price: 10000,
          qty: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Argo Sindoro",
          classType: 3,
          dateStart: new Date(),
          startStation: "Stasiun Manggarai",
          startTime: new Date(),
          destinationStation: "Stasiun Surabaya Pasarturi",
          arrivalTime: new Date(),
          price: 10000,
          qty: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Argo Parahyangan",
          classType: 3,
          dateStart: new Date(),
          startStation: "Stasiun Manggarai",
          startTime: new Date(),
          destinationStation: "Stasiun Surabaya Pasarturi",
          arrivalTime: new Date(),
          price: 10000,
          qty: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Argo Parahyangan",
          classType: 3,
          dateStart: new Date(),
          startStation: "Stasiun Manggarai",
          startTime: new Date(),
          destinationStation: "Stasiun Surabaya Pasarturi",
          arrivalTime: new Date(),
          price: 10000,
          qty: 3,
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
