// import sequelize model, datatypes, bcrypt, and uuid
const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
// import sequelize connection
const sequelize = require("../config/connection");

// create User model
class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// define table columns and configuration
User.init(
  {
    // define an id column
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    // define a username column
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // define a password column
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // password must be at least eight characters long
        len: [8]
      }
    }
  },
  {
    hooks: {
      // set up beforeCreate lifecycle "hook" functionality
      beforeCreate: async (newUserData) => {
        // hash the new user's password with a salt round of 10
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        // return the new user data
        return newUserData;
      },
      // set up beforeUpdate lifecycle "hook" functionality
      beforeUpdate: async (updatedUserData) => {
        // hash the updated user's password with a salt round of 10
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        // return the updated user data
        return updatedUserData;
      }
    },
    // pass in our imported sequelize connection (the direct connection to our database)
    sequelize,
    // do not automatically create createdAt/updatedAt timestamp fields
    timestamps: false,
    // do not pluralize name of database table
    freezeTableName: true,
    // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
    underscored: true,
    modelName: "user"
  }
);

// export User model
module.exports = User;
