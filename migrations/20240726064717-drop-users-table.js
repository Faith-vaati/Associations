'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  },

  down: async (queryInterface, Sequelize) => {
    // In case you want to revert the drop
    await queryInterface.createTable('users', { id: Sequelize.INTEGER });
  }
};