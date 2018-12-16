'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    Username: DataTypes.STRING,
    Email: DataTypes.STRING,
    Password: DataTypes.STRING,
    Verifycode: DataTypes.STRING,
    PhoneNumber: DataTypes.STRING,
    Status: DataTypes.STRING,
    Cellnumber: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};