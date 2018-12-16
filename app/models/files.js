'use strict';
module.exports = (sequelize, DataTypes) => {
  const files = sequelize.define('files', {
    id: DataTypes.INTEGER,
    status: DataTypes.STRING,
    published_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    more_tags: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    maximan_limit: DataTypes.INTEGER
  }, {});
  files.associate = function(models) {
    // associations can be defined here
  };
  return files;
};