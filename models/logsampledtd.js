const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('logsampledtd', {
    LogDTdID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LogTdID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LogType: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    DTdID: {
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
    RecvQty: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
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
    },
    RecvDate2: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    RecvTime2: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RecvQty2: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    UserID2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UserReal2: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Descr2: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'logsampledtd',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "LogDTdID" },
        ]
      },
      {
        name: "Index1",
        using: "BTREE",
        fields: [
          { name: "LogTdID" },
        ]
      },
    ]
  });
};
