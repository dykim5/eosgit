const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tagmt', {
    TagID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SiteID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TagName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    BarPrinter: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Width: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 40
    },
    Height: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 80
    },
    HeightRatio: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 1.40
    },
    TagPort: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    BaudRate: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Rotate: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    PrintHeat: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    PrintSpeed: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    BasePosition: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    CutPosition: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    IsBarCodeNo: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    Descr: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tagmt',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "TagID" },
        ]
      },
      {
        name: "Index1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SiteID" },
          { name: "TagName" },
        ]
      },
    ]
  });
};
