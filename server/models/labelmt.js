const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('labelmt', {
    LabelID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SiteID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LabelName: {
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
    TopMargin: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    BottomMargin: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    IsBarCodeNo: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    IsPrintCount: {
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
    tableName: 'labelmt',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "LabelID" },
        ]
      },
      {
        name: "Index1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SiteID" },
          { name: "LabelName" },
        ]
      },
    ]
  });
};
