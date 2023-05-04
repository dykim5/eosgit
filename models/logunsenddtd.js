const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('logunsenddtd', {
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
    SendDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    SendTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SendQty: {
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
    SendDate2: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    SendTime2: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SendQty2: {
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
    tableName: 'logunsenddtd',
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
