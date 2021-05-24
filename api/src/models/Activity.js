const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('activity', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.STRING,
    },
    duration: {
      type: DataTypes.STRING,
    },
    season: {
      type: DataTypes.STRING,
    },
  });
};
