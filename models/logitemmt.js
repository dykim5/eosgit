const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('logitemmt', {
    TdID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SiteID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TdDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    TdTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LogType: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UserReal: {
      type: DataTypes.STRING(40),
      allowNull: true
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
    Fiber: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    KindID1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    KindID2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    KindID3: {
      type: DataTypes.INTEGER,
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
    RetailPrice: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    PrimePrice: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    MakePrice: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    NotDC: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    RegiDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    StopDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    BarCode: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    IsSleepX: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    WholePriceX: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    RetailPriceX: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    MakePriceX: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    LastQtyX: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    ItemCode2: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    ItemName2: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    ColorName2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SizeName2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Fiber2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    KindID12: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    KindID22: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    KindID32: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BuyPrice2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    WholePrice2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    RetailPrice2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    PrimePrice2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    MakePrice2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    NotDC2: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    RegiDate2: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    StopDate2: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    BarCode2: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    IsSleepX2: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    WholePriceX2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    RetailPriceX2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    MakePriceX2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    LastQtyX2: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'logitemmt',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "TdID" },
        ]
      },
      {
        name: "Index1",
        using: "BTREE",
        fields: [
          { name: "SiteID" },
        ]
      },
      {
        name: "Index2",
        using: "BTREE",
        fields: [
          { name: "TdDate" },
        ]
      },
      {
        name: "Index3",
        using: "BTREE",
        fields: [
          { name: "UserID" },
        ]
      },
    ]
  });
};
