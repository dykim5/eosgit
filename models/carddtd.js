const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('carddtd', {
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
    StoreID: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    CardID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CardName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    CardNumber: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    CardInfo: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    IsSign: {
      type: DataTypes.TINYINT,
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
    Quota: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ApprovalNo: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ApprovalTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CardByrName: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ChargeDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    EstDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Fee: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    }
  }, {
    sequelize,
    tableName: 'carddtd',
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
      {
        name: "Index2",
        using: "BTREE",
        fields: [
          { name: "CardID" },
        ]
      },
    ]
  });
};
