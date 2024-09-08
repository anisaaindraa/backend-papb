'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Term extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Favorites, {
        foreignKey: 'termID',
        targetKey: 'id',
        allownull: 'false',
        onDelete: 'CASCADE'
      })
    }
  }
  Term.init({
    termName: DataTypes.STRING,
    termDefinition: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Term',
  });
  return Term;
};