const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('logunsendtd', {
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
    IsProc: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    ItemID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ItemCode: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ItemName: {
      type: DataTypes.STRING(40),
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
    BasePrice: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    TdPrice: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    UnSendQty: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    SendQty: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    NotDC: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    SlrTdID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SlrDTdID: {
      type: DataTypes.INTEGER,
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
    SlrID2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SlrName2: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    IsRetail2: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    IsProc2: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    ItemID2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ItemCode2: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ItemName2: {
      type: DataTypes.STRING(40),
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
    SizeCode2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    BasePrice2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    TdPrice2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    UnSendQty2: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    SendQty2: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    NotDC2: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    SlrTdID2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SlrDTdID2: {
      type: DataTypes.INTEGER,
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
    Descr2: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'logunsendtd',
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
