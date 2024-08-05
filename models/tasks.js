'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tasks.belongsTo(models.project, {
        as: "project",
        foreignKey: 'project_id',
        onDelete: 'CASCADE'
      });
      Tasks.hasMany(models.Comment, {
        as: "comments",
        foreignKey: 'task_id',
        onDelete: 'CASCADE'
      });
    }
  }
  Tasks.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    time_taken: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    project_id: {
      type: DataTypes.UUID,
      allowNull: false,
      foreignKey: true,
    }
  }, {
    sequelize,
    modelName: 'Tasks',
  });
  return Tasks;
};