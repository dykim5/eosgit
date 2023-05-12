const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('byrprice', {
    PriceID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SiteID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ByrID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ItemID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SpecPrice: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    LastGrow: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    LastDrop: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'byrprice',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PriceID" },
        ]
      },
      {
        name: "Index1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SiteID" },
          { name: "ByrID" },
          { name: "ItemID" },
        ]
      },
      {
        name: "Index2",
        using: "BTREE",
        fields: [
          { name: "ByrID" },
        ]
      },
      {
        name: "Index3",
        using: "BTREE",
        fields: [
          { name: "ItemID" },
        ]
      },
    ]
  });
};
