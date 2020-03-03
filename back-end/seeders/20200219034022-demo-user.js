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
            email: "admin@breeder.com",
            password: hash("admin"),
            username: "admin breeder",
            phone: "081081234321",
            address: "Permata Bintaro Residence",
            photo: "http://admin.jpg",
            level: "Admin",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            email: "juan@mail.com",
            password: hash("juan"),
            username: "Juan Carlos",
            phone: "081081234321",
            address: "Permata Bintaro Residence",
            photo: "http://user.jpg",
            level: "User",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            email: "mey@gmail.com",
            password: hash("mey"),
            username: "Mey Melisa",
            phone: "081081234321",
            address: "Permata Bintaro Residence",
            photo: "http://user.jpg",
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
