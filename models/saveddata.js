'use strict';
module.exports = (sequelize, DataTypes) => {
  const SavedData = sequelize.define('SavedData', {
    revenue: DataTypes.STRING,
    expenses: DataTypes.STRING,
    cost_expenses: DataTypes.STRING,
    gross_profit: DataTypes.STRING,
    company: DataTypes.STRING
  }, {});
  SavedData.associate = function(models) {
    // associations can be defined here
  };
  return SavedData;
};