const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('slrmt', {
    SlrID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SiteID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SlrName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Initial: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    IsSleep: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    KindID1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    KindID2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BaseBlc: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    LastBlc: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    LimitBlc: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    BaseKeep: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    LastKeep: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    DCRate: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    IsRcptFiber: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    IsBlcMark: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    IsConfirm: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    IsTax: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    IsVAT: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    RegiDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Owner: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Worker: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    OwnerHP: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    WorkerHP: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Tel: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Fax: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Bank: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Addr: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Holder: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FirmName: {
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
    FirmEMail: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    NotesScreen: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    NotesRcpt: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    MidasAspID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EzAdminID: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'slrmt',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SlrID" },
        ]
      },
      {
        name: "Index1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SiteID" },
          { name: "SlrName" },
        ]
      },
    ]
  });
};
