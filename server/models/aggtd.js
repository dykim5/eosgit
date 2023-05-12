const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('aggtd', {
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
    AggKind: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    AggName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    IsProc: {
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
    Descr: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'aggtd',
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
    ]
  });
};
