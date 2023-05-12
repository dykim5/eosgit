const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acntmt', {
    AcntID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    AcntName: {
      type: DataTypes.STRING(40),
      allowNull: true,
      unique: "Index1"
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
    Descr: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'acntmt',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "AcntID" },
        ]
      },
      {
        name: "Index1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "AcntName" },
        ]
      },
    ]
  });
};
