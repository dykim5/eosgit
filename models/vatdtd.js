const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vatdtd', {
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
    RecvDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    RecvTime: {
      type: DataTypes.DATE,
      allowNull: true
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
    IsBankIn: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    BankInDate: {
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
    }
  }, {
    sequelize,
    tableName: 'vatdtd',
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
          { name: "RecvDate" },
        ]
      },
    ]
  });
};
