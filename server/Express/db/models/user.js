'use strict';
const bcrypt= require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
  email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
  hashed_password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  User.prototype.validatePassword = function (password) {
    // Note that since this function is a model instance method,
    // `this` is the user instance here:
    return bcrypt.compareSync(password, this.hashed_password.toString());
};

  return User;
};