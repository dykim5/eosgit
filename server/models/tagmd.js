const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tagmd', {
    DetailID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TagID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DetailName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FontName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Size: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 8
    },
    B: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    I: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    U: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    S: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    X: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Y: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Zoom: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    Prefix: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Contents: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tagmd',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "DetailID" },
        ]
      },
      {
        name: "Index1",
        using: "BTREE",
        fields: [
          { name: "TagID" },
        ]
      },
    ]
  });
};
