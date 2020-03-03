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
            name: "Administrator",
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
            name: "Melisa Mai",
            username: "meymelisa",
            email: "melisa@gmail.com",
            password: hash("mey"),
            gender: "Female",
            phone: "081081234321",
            address: "Permata Bintaro Residence",
            level: "User",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: "Jane Doe",
            username: "janedoe",
            email: "janedoe@gmail.com",
            password: hash("jane"),
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
