const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('logbyrtd', {
    LogTdID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LogType: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    LogDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    TdID: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    RcptNo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ByrID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ByrName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    BeforeBlc: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    GrowQty: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    GrowMny: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    DropQty: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    DropMny: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    PriceDCMny: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    PayMny: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    BankMny: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    CardMny: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    DCMny: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    ExcessMny: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    CreditMny: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    AfterBlc: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    IsSettle: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    BookDate: {
      type: DataTypes.DATEONLY,
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
    IsPrintDescr: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    Descr: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    TdDate2: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    TdTime2: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RcptNo2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ByrID2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ByrName2: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    BeforeBlc2: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    GrowQty2: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    GrowMny2: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    DropQty2: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    DropMny2: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    PriceDCMny2: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    PayMny2: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    BankMny2: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    CardMny2: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    DCMny2: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    ExcessMny2: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    CreditMny2: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    AfterBlc2: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    IsSettle2: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    BookDate2: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    UserID2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UserReal2: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    IsPrintDescr2: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    Descr2: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'logbyrtd',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "LogTdID" },
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
          { name: "LogDate" },
        ]
      },
    ]
  });
};
