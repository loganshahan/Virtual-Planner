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
        start: {
            type:  DataTypes.STRING,
            allowNull: false,
        },
        startDate: {
            type: DataTypes.DATE,
            allowNull:true
        },
        end: {
            type:  DataTypes.STRING,
            allowNull: false,
        },
        desc: {
            type:  DataTypes.STRING,
            allowNull: true,
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