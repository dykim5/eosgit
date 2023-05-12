const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('labelmd', {
    DetailID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LabelID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DetailName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    IsPrint: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    Width: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    Height: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    FontName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Size: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 7
    },
    HAlign: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    VAlign: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
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
    FLeft: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    FRight: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    FTop: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    FBottom: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    FStyle: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    FWidth: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 1.00
    },
    BgColor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 536870911
    },
    Rotate: {
      type: DataTypes.INTEGER,
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
      defaultValue: 1.00
    },
    FiberKind: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    FiberName: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    FiberRate: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    WashFilePath: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    WashFileName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Image: {
      type: DataTypes.BLOB,
      allowNull: true
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
    tableName: 'labelmd',
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
          { name: "LabelID" },
        ]
      },
    ]
  });
};
