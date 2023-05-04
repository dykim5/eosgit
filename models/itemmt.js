const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('itemmt', {
    ItemID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ItemCode: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ItemName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Initial: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ColorName: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SizeName: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SizeCode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SiteID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Fiber: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    KindID1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    KindID2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    KindID3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BuyPrice: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    WholePrice: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    RetailPrice: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    PrimePrice: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    MakePrice: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    NotDC: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    NotMake: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    RegiDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    StopDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ImageID0: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ImageID1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ImageID2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ImageID3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ImageID4: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EANCode: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    BarCode: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Descr: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    IsPublic1: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    IsSleep1: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    WholePrice1: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    RetailPrice1: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    MakePrice1: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    BaseQty1: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    LastQty1: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    IsPublic2: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    IsSleep2: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    WholePrice2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    RetailPrice2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    MakePrice2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    BaseQty2: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    LastQty2: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    IsPublic3: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    IsSleep3: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    WholePrice3: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    RetailPrice3: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    MakePrice3: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    BaseQty3: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    LastQty3: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    IsPublic4: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    IsSleep4: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    WholePrice4: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    RetailPrice4: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    MakePrice4: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    BaseQty4: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    LastQty4: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    IsPublic5: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    IsSleep5: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    WholePrice5: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    RetailPrice5: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    MakePrice5: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    BaseQty5: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    LastQty5: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    IsPublic6: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    IsSleep6: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    WholePrice6: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    RetailPrice6: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    MakePrice6: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    BaseQty6: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    LastQty6: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    IsPublic7: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    IsSleep7: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    WholePrice7: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    RetailPrice7: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    MakePrice7: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    BaseQty7: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    LastQty7: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    IsPublic8: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    IsSleep8: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    WholePrice8: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    RetailPrice8: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    MakePrice8: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    BaseQty8: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    LastQty8: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    IsPublic9: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    IsSleep9: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    WholePrice9: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    RetailPrice9: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    MakePrice9: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    BaseQty9: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    LastQty9: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'itemmt',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ItemID" },
        ]
      },
      {
        name: "Index1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ItemName" },
          { name: "ColorName" },
          { name: "SizeName" },
        ]
      },
      {
        name: "Index2",
        using: "BTREE",
        fields: [
          { name: "ItemCode" },
        ]
      },
      {
        name: "Index3",
        using: "BTREE",
        fields: [
          { name: "EANCode" },
        ]
      },
      {
        name: "Index4",
        using: "BTREE",
        fields: [
          { name: "BarCode" },
        ]
      },
    ]
  });
};
