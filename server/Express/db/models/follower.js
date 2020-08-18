'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follower = sequelize.define('Follower', {
    followable_type: DataTypes.STRING,
    followable_id: DataTypes.INTEGER,
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users'
      }

    } 
  }, {});
  Follower.associate = function(models) {
    // associations can be defined here
  };
  return Follower;
};