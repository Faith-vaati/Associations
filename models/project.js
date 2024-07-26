'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class project extends Model {
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
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'project',
  });
  return project;
};
