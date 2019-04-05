module.exports = function(sequelize, DataTypes) {
    var Calendr = sequelize.define("Calendr", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type:  DataTypes.STRING,
            allowNull: false,
           },
        desc: {
            type:  DataTypes.STRING,
            allowNull: true,
        },
        start: {
            type:  DataTypes.STRING,
            allowNull: false,
        },
        end: {
            type:  DataTypes.STRING,
            allowNull: false,
        }
    
    });
    Calendr.associate = function(models) {
        Calendr.belongsTo(models.User, {
            foreignKey: {
              allowNull: false
            }
    });

    };
    return Calendr;

}