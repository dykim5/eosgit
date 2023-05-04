const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usermt', {
    UserID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SiteID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UserName: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "사용자ID"
    },
    UserReal: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "사용자명"
    },
    Initial: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Password: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "비밀번호"
    },
    IsSleep: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    IsSuperVisor: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "최고관리자"
    },
    IsClerk: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "직원매출관리시 판매사원 사용여부"
    },
    IsOnlyView: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "조회용"
    },
    IsHeadLogin: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "관리용로그인"
    },
    HP: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "휴대전화"
    },
    Tel: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "전화"
    },
    Addr: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "주소"
    },
    IsBuyPriceView: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "입고가노출"
    },
    IsPrimePriceView: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "제품원가노출"
    },
    IsPastLogin: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "과거일자로그인"
    },
    IsPastTdAdd: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "과거일자거래추가"
    },
    IsSettleTdAdd: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "결제거래사용"
    },
    IsRcptReserve: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "보류인쇄"
    },
    PreviewDay: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "조회가능일수"
    },
    ModifyDay: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "수정가능일수"
    },
    IsMnyViewDay: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "금일내역금액노출"
    },
    IsMnyViewSlr: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "업체내역금액노출"
    },
    IsSummaryViewDay: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "금일내역합계노출"
    },
    IsSummaryViewSlr: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "업체내역합계노출"
    },
    IsCloseTdView: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "영업정산합계노출"
    },
    IsSlrTdDayUserView: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "금일내역사용자조회"
    },
    IsRegiPriceDC: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "단가DC가능"
    },
    AccessSlrTdDay: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "금일내역수정"
    },
    AccessSlrTdSlr: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "업체내역수정"
    },
    AccessByrTd: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "입고내역수정"
    },
    AccessSampleTd: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "샘플삭제"
    },
    AccessUnSendTd: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "미송삭제"
    },
    AccessVATTd: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "부가세수정"
    },
    AccessClerkSale: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "금일내역사원변경"
    },
    AccessMaster: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "상품정보수정"
    },
    AccessStock: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "상품재고수정"
    },
    AccessPrice: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "상품금액수정"
    },
    AccessBankTd: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "통장관리사용"
    },
    AccessExport: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "엑셀\/인쇄"
    },
    AccessMobile: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "모바일조회"
    },
    AccessSetupHead: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "사무실 설치"
    },
    AccessSetupCnt: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "매대 설치"
    },
    Descr: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "비고"
    },
    AnnounceID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "공지사항을 봤는지 확인하는 용도로 쓰임"
    },
    UnAccessMenu: {
      type: DataTypes.STRING(2000),
      allowNull: true,
      comment: "메뉴접근권한설정"
    },
    EncPassword: {
      type: DataTypes.STRING(2000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usermt',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "UserID" },
        ]
      },
      {
        name: "Index1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SiteID" },
          { name: "UserName" },
        ]
      },
    ]
  });
};
