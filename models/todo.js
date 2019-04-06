module.exports = function (sequelize, DataTypes) {
  var Todo = sequelize.define("Todo", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Todo.associate = function (models) {

    Todo.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false
      }
    });

    Todo.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Todo;
};
