const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bankmt', {
    BankID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SiteID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsSleep: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    BankKind: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    BankName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Initial: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Bank: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "은행명"
    },
    AccountNumber: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "계좌번호"
    },
    AccountPassword: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "계좌 비밀번호"
    },
    AccountType: {
      type: DataTypes.STRING(2),
      allowNull: true,
      comment: "법인\/개인"
    },
    IdentityNumber: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "사업자번호\/생년월일"
    },
    BankingID: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "인터넷뱅킹아이디(국민은행 필수)"
    },
    FastID: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "조회전용아이디(대구,신협,신한 필수)"
    },
    FastPassword: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "조회전용아이디(대구,신협,신한 필수)"
    },
    LastTID: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ""
    },
    Descr: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'bankmt',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "BankID" },
        ]
      },
      {
        name: "Index1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SiteID" },
          { name: "BankName" },
        ]
      },
    ]
  });
};
