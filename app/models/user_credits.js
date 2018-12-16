'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_credits = sequelize.define('user_credits', {
    updated_at: DataTypes.DATE,
    balance: DataTypes.INTEGER,
    expiry_date: DataTypes.DATE
  }, {});
  user_credits.associate = function(models) {
    // associations can be defined here
  };
  return user_credits;
};