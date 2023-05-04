const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rcptmt', {
    RcptID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SiteID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RcptNo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    RcptName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    RcptPrinter: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Width: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 80
    },
    LeftMargin: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 5
    },
    RightMargin: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 5
    },
    Height: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    FontName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Size: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 9
    },
    B: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    HeightRatio: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 1.40
    },
    LineTopMargin: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 1.00
    },
    LineBottomMargin: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 2.00
    },
    Descr: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IsImage: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    IsImageCenter: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    Image: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    ImageCode: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IsTitle: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    Title: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TitleGeneral: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IsTopMsg: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    TopMsg: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    TopMsgGeneral: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    IsBottomMsg: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    BottomMsg: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    BottomMsgGeneral: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    OrderMsg: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'rcptmt',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "RcptID" },
        ]
      },
      {
        name: "Index1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SiteID" },
          { name: "RcptNo" },
        ]
      },
    ]
  });
};
