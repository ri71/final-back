const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {

  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },

  gpa: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: 0.0,
      max: 4.0
    }
  },

  imageUrl: {
    type: Sequelize.BLOB
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

module.exports = Student;