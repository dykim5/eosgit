const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('logvattd', {
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
    IsPublish: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    IsProc: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    VATMny: {
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
    DCMny: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
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
    IsPublish2: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    IsProc2: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    VATMny2: {
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
    DCMny2: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
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
    tableName: 'logvattd',
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
