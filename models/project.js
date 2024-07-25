'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      project.belongsTo(models.user, {
        as: "created_by_user",
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
      });
    }
  }
  project.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'project',
  });
  return project;
};