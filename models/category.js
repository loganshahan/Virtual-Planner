module.exports = function(sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
      categoryId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
       type:  DataTypes.STRING,
       allowNull: false,
      }
    });
    Category.associate = function(models) {
        // We're saying that a todo should belong to a User
        // A category can't be created without a User due to the foreign key constraint
        Category.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });

        Category.hasMany(models.Todo, {
          onDelete: "cascade"
        });
      };
    return Category;
  };
  