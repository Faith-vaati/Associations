'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('projects');
  },

  down: async (queryInterface, Sequelize) => {
    // In case you want to revert the drop
    await queryInterface.createTable('projects', { id: Sequelize.INTEGER });
  }
};
