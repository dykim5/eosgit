const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('banktd', {
    TdID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SiteID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    TdDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "입금일자"
    },
    TdTime: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "입금시간"
    },
    BankID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    IsProc: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "확인 체크"
    },
    IsPay: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "결제추가"
    },
    InMny: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00,
      comment: "입금"
    },
    Holder: {
      type: DataTypes.STRING(40),
      allowNull: true,
      defaultValue: "",
      comment: "내용, 예금주"
    },
    TID: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ""
    },
    SlrTdID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Descr: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: "",
      comment: "비고"
    }
  }, {
    sequelize,
    tableName: 'banktd',
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
    ]
  });
};
