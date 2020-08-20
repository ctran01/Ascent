'use strict';
module.exports = (sequelize, DataTypes) => {
  const Route = sequelize.define('Route', {
    name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    type:{
      type: DataTypes.STRING,
      allowNull: false
    },
    grade:{
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.TEXT,
    image_url: DataTypes.STRING,
    latitude: DataTypes.NUMERIC,
    longitude: DataTypes.NUMERIC,
    area_id: DataTypes.INTEGER
  }, {});
  Route.associate = function(models) {
    // associations can be defined here

    Route.belongsToMany(models.User, {
      as: 'followers',
      through: {
          model: 'Follower',
          scope: {
              followableType: 'route'
          }
      },
      foreignKey: 'followable_id',
      constraints: false
  })

    Route.belongsTo(models.Area, {
      foreignKey: 'area_id'
    })
  };
  return Route;
};