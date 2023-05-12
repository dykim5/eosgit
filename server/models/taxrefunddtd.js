const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('taxrefunddtd', {
    DTdID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TdID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TerminalID: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    IsPin: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PassportName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    PassportNum: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    PassportNation: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    PassportSex: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PassportBirth: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    PassportExpire: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Qty: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    PermitMny: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    CancelMny: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    RefundMny: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    BeforeLimitMny: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    ExportExpiryDate: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ApprovalNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CardApprovalNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'taxrefunddtd',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "DTdID" },
        ]
      },
      {
        name: "Index1",
        using: "BTREE",
        fields: [
          { name: "TdID" },
        ]
      },
    ]
  });
};
