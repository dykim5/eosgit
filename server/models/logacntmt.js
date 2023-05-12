const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('logacntmt', {
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
    AcntID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AcntName: {
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
    AcntName2: {
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
    }
  }, {
    sequelize,
    tableName: 'logacntmt',
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
