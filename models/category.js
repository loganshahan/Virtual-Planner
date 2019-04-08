module.exports = function (sequelize, DataTypes) {
  var Category = sequelize.define("Category", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  Category.associate = function (models) {
    Category.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });

    // Category.hasMany(models.Todo, {
    //   onDelete: "cascade"
    // });
  };
  return Category;
};
