module.exports = function(sequelize, DataTypes) {
    var Txns = sequelize.define("Txns", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        amount:{
            type: DataTypes.DECIMAL(19,2),
            allowNull: false
        },
        description: {
            type:  DataTypes.STRING,
            allowNull: false,
           }
    });
    Txns.associate = function(models) {
        Txns.belongsTo(models.User, {
            foreignKey: {
              allowNull: false
            }
    });

    };

    return Txns;
}