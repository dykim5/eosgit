const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('movetd', {
    TdID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SiteID1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SiteID2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsDeleted1: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    IsDeleted2: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
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
    IsConfirm: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    Qty: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    BuyPriceMny: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    WholePriceMny: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    PrimePriceMny: {
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
    MsgSite1: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    MsgSite2: {
      type: DataTypes.STRING(300),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'movetd',
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
          { name: "SiteID1" },
        ]
      },
      {
        name: "Index2",
        using: "BTREE",
        fields: [
          { name: "SiteID2" },
        ]
      },
      {
        name: "Index3",
        using: "BTREE",
        fields: [
          { name: "TdDate" },
        ]
      },
    ]
  });
};
