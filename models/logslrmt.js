const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('logslrmt', {
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
    TdTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LogType: {
      type: DataTypes.TINYINT,
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
    SlrID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    SlrName: {
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
    SlrName2: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    IsSleep2: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    KindID12: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    KindID22: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LastBlc2: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    LimitBlc2: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    LastKeep2: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    DCRate2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    }
  }, {
    sequelize,
    tableName: 'logslrmt',
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
      {
        name: "Index3",
        using: "BTREE",
        fields: [
          { name: "UserID" },
        ]
      },
    ]
  });
};
