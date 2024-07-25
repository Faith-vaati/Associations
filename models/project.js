'use strict';
const { Model } = require('sequelize');
const { v4, uuidv4 } = require('uuid');


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
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: uuidv4
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'project',
  });
  return project;
};