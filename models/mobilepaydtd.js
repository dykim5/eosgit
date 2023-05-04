const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mobilepaydtd', {
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
    CATID: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    CATFirmNo: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    MobilePayName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    BarCode: {
      type: DataTypes.STRING(40),
      allowNull: true
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
    ApprovalNo: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ApprovalTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mobilepaydtd',
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
