"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        email: "example@example.com",
        password: "123456",
        firstName: "Trung",
        lastName: "Nguyen Duc",
        address: "TP.HCM",
        phoneNumber: "0777xxxxxx",
        gender: 1,
        image:'1234124',
        roleID: '1',
        positionID: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};