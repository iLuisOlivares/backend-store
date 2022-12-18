const { User, UserSchema } = require("./user.model");

//Se agregan cada uno de los modelos
function setUpModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
}

module.exports = setUpModels;
