"use strict";
const bcrypt = require("bcrypt");

function hash(pwd) {
  return bcrypt.hashSync(pwd, 10);
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      return queryInterface.bulkInsert(
        "users",
        [
          {
            name: "admin lantick",
            username: "admin_lantik",
            email: "admin@lantik.com",
            password: hash("admin"),
            gender: "Male",
            phone: "081081234321",
            address: "Permata Bintaro Residence",
            level: "Admin",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: "Juan Carlos",
            username: "juancarlos",
            email: "juan@mail.com",
            password: hash("juan"),
            gender: "Male",
            phone: "081081234321",
            address: "Permata Bintaro Residence",
            level: "User",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: "Mey Melisa",
            username: "meymelisa",
            email: "mey@gmail.com",
            password: hash("mey"),
            gender: "Male",
            phone: "081081234321",
            address: "Permata Bintaro Residence",
            level: "User",
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ],
        {}
      );
    } catch (err) {
      console.log(err);
    }
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
