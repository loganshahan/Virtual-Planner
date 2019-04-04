module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    googleID: {
     type:  DataTypes.STRING,
     allowNull: false,
    },
    displayName: DataTypes.STRING
    
  });

  User.associate = function(models) {

    User.hasMany(models.Category, {
      onDelete: "cascade"
    });

    User.hasMany(models.Todo, {
      onDelete: "cascade"
    });
    User.hasMany(models.Txns, {
      onDelete: "cascade"
    });
  };
  return User;
};
