const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('byrmt', {
    ByrID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SiteID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ByrName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Initial: {
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
    BaseBlc: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
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
    IsBlcMark: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    IsConfirm: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    RegiDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Owner: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Worker: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    OwnerHP: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    WorkerHP: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Tel: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Fax: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Addr: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NotesScreen: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    NotesRcpt: {
      type: DataTypes.STRING(300),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'byrmt',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ByrID" },
        ]
      },
      {
        name: "Index1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SiteID" },
          { name: "ByrName" },
        ]
      },
    ]
  });
};
