const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User',  {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    avatar: {
      type: Sequelize.STRING
    }, 
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};