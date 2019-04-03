module.exports = function(sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      category: {
       type:  DataTypes.STRING,
       allowNull: false,
      }
    });
    Category.associate = function(models) {
        // We're saying that a todo should belong to a User
        // A category can't be created without a User due to the foreign key constraint
        // Category.belongsTo(models.User, {
        //   foreignKey: {
        //     allowNull: false
        //   }
        // });

        // Category.belongsTo(models.Todo, {
        //   foreignKey: {
        //     allowNull: false
        //   }
        // });
        

        Category.hasOne(models.Todo, {
          onDelete: "cascade"
        });
      };
    return Category;
  };
  