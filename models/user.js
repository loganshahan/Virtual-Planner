module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
     googleID: {
     type:  DataTypes.STRING,
     primaryKey: true,
     allowNull: false,
    },
    displayName: DataTypes.STRING
    
    
  });
  return User;
};
