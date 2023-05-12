const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kindmt', {
    KindID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    KindType: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    KindName: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    KindColor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsSleep: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    IsDefault: {
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
    tableName: 'kindmt',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "KindID" },
        ]
      },
      {
        name: "Index1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "KindType" },
          { name: "KindName" },
        ]
      },
    ]
  });
};
