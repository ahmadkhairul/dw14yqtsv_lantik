"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "orders",
      [
        {
          ticketId: 1,
          userId: 2,
          qty: 3,
          transferProof: "buktitransfer.jpg",
          status: "Approved",
          totalPrice: 10000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ticketId: 1,
          userId: 3,
          qty: 2,
          transferProof: "buktitransfer.jpg",
          status: "Approved",
          totalPrice: 20000,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("orders", null, {});
  }
};
