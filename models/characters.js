const { Model, DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const sequelize = require("../config/connection");

class Character extends Model {}

Character.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      references: {
        // this is a reference to the user model
        model: "users",
        key: "id"
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    race: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subrace: {
      type: DataTypes.STRING,
      allowNull: false
    },
    class: {
      type: DataTypes.STRING,
      allowNull: false
    },
    background: {
      type: DataTypes.STRING,
      allowNull: true
    },
    strStat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 8
    },
    dexStat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 8
    },
    conStat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 8
    },
    wisStat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 8
    },
    chaStat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 8
    },
    intStat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 8
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "characters"
  }
);

module.exports = Character;
