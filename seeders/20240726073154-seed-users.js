'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('users', [
    {
      id: "8f6369fc-d7fd-46fb-b3a2-7988ab6671e4",
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@mail.com",
      password: "123456",
      age: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: "4d3c0d6b-1b1e-4a3b-9c1f-1e4f7d9e9f6d",
      firstName: "Jane",
      lastName: "Doe",
      email: "janedoe@mail.com",
      password: "123456",
      age: 25,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: "f4b3b1b4-1b1e-4a3b-9c1f-1e4f7d9e9f6d",
      firstName: "John",
      lastName: "Smith",
      email: "jsmith@mail.com",
      password: "123456",
      age: 40,
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('users', null, {});
  }
};
