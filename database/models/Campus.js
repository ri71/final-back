const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
    allowNull: false
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },

  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }



});

module.exports = Campus;