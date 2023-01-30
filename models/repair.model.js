const { DataTypes } = require('sequelize');

const { db } = require('../database/db');

const Repair = db.define('repair', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  // role: {
  //   type: DataTypes.STRING,
  //   defaultValue: 'pending',
  // },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'pending', //pending
  },
});

module.exports = Repair;
