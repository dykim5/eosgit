const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('noticetd', {
    TdID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ParentID: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    Title: {
      type: DataTypes.STRING(100),
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
    IsNotice: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    Notice: {
      type: DataTypes.STRING(10000),
      allowNull: true
    },
    ImageID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RecvSite: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    ReadSite: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    RecvSiteName: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'noticetd',
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
          { name: "ParentID" },
        ]
      },
      {
        name: "Index2",
        using: "BTREE",
        fields: [
          { name: "SiteID" },
        ]
      },
      {
        name: "Index3",
        using: "BTREE",
        fields: [
          { name: "TdDate" },
        ]
      },
    ]
  });
};
