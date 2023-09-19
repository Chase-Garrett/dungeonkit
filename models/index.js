// import all models
const User = require("./users");
const Character = require("./characters");

// create associations
User.hasMany(Character, {
  foreignKey: "id",
  onDelete: "CASCADE"
});

// export the module
module.exports = { User, Character };
