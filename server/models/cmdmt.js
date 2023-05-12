const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cmdmt', {
    CmdID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SiteID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CmdNo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    CmdName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Enable: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    Visible: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    Position: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    Shift: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    Ctrl: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    Alt: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    ShortCut: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ShortCode: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    IsCertify: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'cmdmt',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CmdID" },
        ]
      },
      {
        name: "Index1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SiteID" },
          { name: "CmdNo" },
        ]
      },
    ]
  });
};
