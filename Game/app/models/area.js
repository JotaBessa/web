'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Area extends Model {
    static associate(models) {
    }
  };
  Area.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Area',
  });
  return Area;
};