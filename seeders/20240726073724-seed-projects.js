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
   return queryInterface.bulkInsert('projects', [
    {
      id: "1f6369fc-d7fd-46fb-b3a2-7988ab6671e4",
      name: "Project 1",
      description: "Description 1",
      start_date: new Date(),
      end_date: new Date(),
      user_id: "8f6369fc-d7fd-46fb-b3a2-7988ab6671e4",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: "2d3c0d6b-1b1e-4a3b-9c1f-1e4f7d9e9f6d",
      name: "Project 2",
      description: "Description 2",
      start_date: new Date(),
      end_date: new Date(),
      user_id: "4d3c0d6b-1b1e-4a3b-9c1f-1e4f7d9e9f6d",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: "3f4b3b1b-1b1e-4a3b-9c1f-1e4f7d9e9f6d",
      name: "Project 3",
      description: "Description 3",
      start_date: new Date(),
      end_date: new Date(),
      user_id: "f4b3b1b4-1b1e-4a3b-9c1f-1e4f7d9e9f6d",
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: "4f4b3b1b-1b1e-4a3b-9c1f-1e4f7d9e9f6d",
      name: "Project 4",
      description: "Description 4",
      start_date: new Date(),
      end_date: new Date(),
      user_id: "8f6369fc-d7fd-46fb-b3a2-7988ab6671e4",
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
  }
};
