module.exports = function(sequelize, DataTypes) {
    var Todo = sequelize.define("Todo", {
      id: {
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
      // category: {
      //   type: DataTypes.STRING,
      //   allowNull: false
      // }
    });
    Todo.associate = function(models) {

      Todo.belongsTo(models.Category, {
        as: "cid",
        foreignKey: {
          name: "id",
          allowNull: false
        }
      });

        // We're saying that a todo should belong to a User
        // A todo can't be created without a User due to the foreign key constraint
        Todo.belongsTo(models.User, {
          as: "uid",
          foreignKey: {
            name: "id",
            allowNull: false
          }
        });
      };

    return Todo;
  };
  