const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cardmt', {
    CardID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SiteID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CardName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    IsSleep: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    FeeRate: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    Descr: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cardmt',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CardID" },
        ]
      },
      {
        name: "Index1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SiteID" },
          { name: "CardName" },
        ]
      },
    ]
  });
};
