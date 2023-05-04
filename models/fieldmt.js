const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fieldmt', {
    FID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    FName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FIs: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    FPrice: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    FQty: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    FMny: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    FFloat: {
      type: DataTypes.FLOAT(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    FDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    FDateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FTime: {
      type: DataTypes.TIME,
      allowNull: true
    },
    FDescr: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    FBlob: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'fieldmt',
    timestamps: false
  });
};
