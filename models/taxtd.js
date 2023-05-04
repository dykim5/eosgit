const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('taxtd', {
    TaxID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SiteID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TdID: {
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
    SlrID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SlrName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    IsRetail: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    IsPay: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    NetMny: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    TaxMny: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    TotMny: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    CurrMny: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    CheckMny: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    BillMny: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    RestMny: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    BookNo1: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    BookNo2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    SerialNo: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    MyFirmNo: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    MyFirmNoChild: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    MyFirmName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    MyFirmOwner: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    MyFirmAddr: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    MyFirmKind: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    MyFirmItem: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    MyFirmEWorker: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MyFirmETel: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MyFirmEMail: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FirmNo: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FirmNoChild: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    FirmName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FirmOwner: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FirmAddr: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FirmKind: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FirmItem: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FirmEWorker: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FirmETel: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FirmEMail: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Date1: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    Item1: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Unit1: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Qty1: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    Price1: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    Net1: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    Tax1: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    Date2: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    Item2: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Unit2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Qty2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    Price2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    Net2: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    Tax2: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    Date3: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    Item3: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Unit3: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Qty3: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    Price3: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    Net3: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    Tax3: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    Date4: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    Item4: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Unit4: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Qty4: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    Price4: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    Net4: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    Tax4: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    ItemKey: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    StateCode: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ModifyCode: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    IssueDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    IsEMailOpen: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UserReal: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Descr: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'taxtd',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "TaxID" },
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
          { name: "TdID" },
        ]
      },
      {
        name: "Index3",
        using: "BTREE",
        fields: [
          { name: "TdDate" },
        ]
      },
      {
        name: "Index4",
        using: "BTREE",
        fields: [
          { name: "SlrID" },
        ]
      },
    ]
  });
};
