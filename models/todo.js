module.exports = function(sequelize, DataTypes) {
    var Todo = sequelize.define("Todo", {
      noteId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
       type:  DataTypes.STRING,
       allowNull: false,
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    Todo.associate = function(models) {
        // We're saying that a todo should belong to a User
        // A todo can't be created without a User due to the foreign key constraint
        Todo.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    return Todo;
  };
  