const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('configmt', {
    ConfigID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CompanyCode: {
      type: DataTypes.CHAR(4),
      allowNull: true,
      defaultValue: "200"
    },
    CompanyName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    IsShop: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    IsItemCodeAlways: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    IsRightJustify: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    IsUseImage: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    IsMoveStockDirect: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    IsMoveFromShop: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    IsTagBySite: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    ItemKindName1Label: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "구분1"
    },
    ItemKindName2Label: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "구분2"
    },
    ItemKindName3Label: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "구분3"
    },
    ByrKindName1Label: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "구분1"
    },
    ByrKindName2Label: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "구분2"
    },
    SlrKindName1Label: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "구분1"
    },
    SlrKindName2Label: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "구분2"
    },
    ShopKindName1Label: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "구분1"
    },
    ShopKindName2Label: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "구분2"
    },
    SlrTdKindNameLabel: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "순위"
    },
    Colors: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    Sizes: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    Fibers: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'configmt',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ConfigID" },
        ]
      },
    ]
  });
};
