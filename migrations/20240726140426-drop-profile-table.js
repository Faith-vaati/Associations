'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Profiles');
  },

  down: async (queryInterface, Sequelize) => {
    // In case you want to revert the drop
    await queryInterface.createTable('Profiles'), { id: Sequelize.INTEGER };
  }
};
