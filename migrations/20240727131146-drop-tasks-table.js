'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tasks');
  },

  down: async (queryInterface, Sequelize) => {
    // In case you want to revert the drop
    await queryInterface.createTable('Tasks'), { id: Sequelize.INTEGER };
  }
};
