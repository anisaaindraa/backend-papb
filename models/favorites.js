'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Favorites.belongsTo(models.User, {
        foreignKey: 'userID',
        targetKey: 'id',
        allownull: 'false',
        onDelete: 'CASCADE'
      })
      Favorites.belongsTo(models.Term, {
        foreignKey: 'userID',
        targetKey: 'id',
        allownull: 'false',
        onDelete: 'CASCADE'
      })
    }
  }
  Favorites.init({
    termList: DataTypes.STRING,
    userID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Favorites',
  });
  return Favorites;
};