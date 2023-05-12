const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('logmovedtd', {
    LogDTdID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LogTdID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Log12: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ListNo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    IsMake: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    ItemID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ItemCode: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    ItemName: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    ColorName: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SizeName: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SizeCode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    BuyPrice: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    WholePrice: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    PrimePrice: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    Qty: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'logmovedtd',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "LogDTdID" },
        ]
      },
      {
        name: "Index1",
        using: "BTREE",
        fields: [
          { name: "LogTdID" },
        ]
      },
      {
        name: "Index2",
        using: "BTREE",
        fields: [
          { name: "IsMake" },
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
