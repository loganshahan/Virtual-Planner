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
  return User;
};
