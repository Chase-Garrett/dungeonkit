// import all models
const User = require("./users");
const Character = require("./characters");

// create associations
User.hasMany(Character, {
  foreignKey: "userId",
  onDelete: "CASCADE"
});

Character.belongsTo(User, {
  foreignKey: "userId"
});

// export the module
module.exports = { User, Character };
