const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sitemt', {
    SiteID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SiteName: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "매장명(업무용)",
      unique: "Index1"
    },
    Initial: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    IsSleep: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "휴면여부"
    },
    KindID1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "구분1"
    },
    KindID2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "구분2"
    },
    BaseBlc: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00,
      comment: "기준잔액(공장용)"
    },
    LastBlc: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00,
      comment: "현잔액(공장용)"
    },
    DeliveryDate: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "납품예정일수(공장용)"
    },
    SiteType: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "1: 일반매장, 2: 공장"
    },
    SiteMarkCode: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "매장코드"
    },
    SiteMarkName: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "매장명(노출용)"
    },
    BaseSiteID: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "참조매장"
    },
    AddHour: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "영업일자 시간설정"
    },
    IsClerk: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "판매사원 사용여부"
    },
    IsPinYin: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "중국어 병음 사용여부"
    },
    IsGrid2Line: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "판매화면구성: 품명넓게쓰기(2줄쓰기)"
    },
    IsItemCode: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "상품입력창 커서 자동움직입 품번"
    },
    IsItemName: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "상품입력창 커서 자동움직입 품명"
    },
    IsTdPrice: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "상품입력창 커서 자동움직입 단가"
    },
    IsZeroDelete: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "상품입력창 수량 0거래 지우기"
    },
    StrtDateMode: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "조회시 시작일자 자동설정방식"
    },
    IsViewItemImage: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "판매화면구성: 상품이미지 보이기"
    },
    IsViewCmd5Line: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "판매화면구성: 기능버튼 5줄사용하기"
    },
    IsFixMainForm: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "판매화면고정"
    },
    IsPopupSubItem: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "판매화면구성: 단일상품 메뉴선택시 상세창 보이기"
    },
    IsPopupViewStock: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "판매화면구성: 상품팝업시 재고보이기"
    },
    IsSemiView: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    IsSpecPriceEasy: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "특별가를 거래가로 반영하기"
    },
    ArrangeMode: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 3,
      comment: "수량합산방식"
    },
    IsPartQtyInput: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "부분수량입력 사용여부"
    },
    IsAutoPay: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "판매시 입금금액 자동산정여부"
    },
    IsFixBlcGeneral: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "일반업체 처리시 잔액여부"
    },
    IsSlrDC: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "판매시 업체별 할인 적용여부"
    },
    IsSlrNotice: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "업체별 샘플, 미송 알림여부"
    },
    SlrDCRoundingTarget: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "할인금액",
      comment: "할인률 적용시 반올림 기준대상: 할인금액, 당일합계, 적용안함."
    },
    SlrDCRoundingUnit: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 100.00,
      comment: "할인률 적용시 반올림 기준대상: 1000원, 500원, 100원"
    },
    SlrDCRoundingType: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "반올림",
      comment: "할인률 적용시 반올림 기준대상: 올림, 반올림, 내림"
    },
    IsPrintDescr: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "판매시 비고인쇄함 선택여부"
    },
    IsMultiClosing: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "영업정산방식"
    },
    CertifyCode: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "기능키 인증요청시 비밀번호"
    },
    GoalMny: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00,
      comment: "사용안함"
    },
    IsBarcode: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "바코드 사용여부"
    },
    BrandName: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "라벨 상호(브랜드)명"
    },
    IsSampleGeneral: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "일반업체 샘플처리 가능여부"
    },
    IsUnSendGeneral: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "일반업체 미송처리 가능여부"
    },
    IsKeeping: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "판매거래시 매입운영정책"
    },
    KeepingRate: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00,
      comment: "환불불가금액으로만 운영시 자동산정비율"
    },
    RcptCopies: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 2,
      comment: "영수증 전표매수"
    },
    IsRcpt2Line: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "품명넓게쓰기(2줄쓰기)"
    },
    IsRcptNo: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "전표번호 인쇄하기"
    },
    IsRcptItemDescr: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "2줄쓰기시 상품비고 인쇄하기"
    },
    IsRcptSeperateLine: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "줄간 라인삽입하기"
    },
    IsRcptSeperateItem: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "대표상품간 라인삽입하기"
    },
    RcptMinimumLine: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 25,
      comment: "전표최소길이"
    },
    IsRcptGeneralOne: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "일반업체시 전표 1장만 발행"
    },
    IsRcptGroupItem: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "전표상 색상\/사이즈별 합치기"
    },
    IsRcptFiber: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "판매처 등록시 혼용률 인쇄기준"
    },
    IsRcptSummaryBlc: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "전표상 합계필드 표시기준"
    },
    IsRcptUnSend: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "발송전표 미발송내역"
    },
    IsRcptSampleItem: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "샘플전표 동일상품 정보"
    },
    IsTax1Line: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "세금계산서 상세내역 한줄인쇄"
    },
    Tax1LineName: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "세금계산서 한줄인쇄 대표품명"
    },
    IsTaxVATed: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "거래금액에 부가세"
    },
    IsTaxPayed: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "세금계산서 영수\/청구 기본값"
    },
    AccessTaxPOS: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "세금계산서 발행여부(매장)"
    },
    IsSheetItemCode: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "거래명세서 품명란 품번인쇄"
    },
    IsSheetTradeType: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "거래명세서 출력양식"
    },
    Banks: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      comment: "판매처기초자료 - 계좌(전표)"
    },
    SlrTdDescrs: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      comment: "입금창 - 비고인쇄함 버튼"
    },
    FirmName: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "사업자상호"
    },
    FirmNo: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "사업자번호"
    },
    FirmNoChild: {
      type: DataTypes.STRING(4),
      allowNull: true,
      comment: "종사업장"
    },
    FirmOwner: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "대표자"
    },
    FirmAddr: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "사업장주소"
    },
    FirmKind: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "업태"
    },
    FirmItem: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "종목"
    },
    FirmEWorker: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "담당자"
    },
    FirmETel: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "전자계산서 담당자 연락처"
    },
    FirmEMail: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "전자계산서EMali"
    },
    IsStamp: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "직인 인쇄여부"
    },
    FirmStamp: {
      type: DataTypes.BLOB,
      allowNull: true,
      comment: "직인"
    },
    IsRetailOnly: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "판매시 소매판매 고정(중국)"
    },
    IsBtoB: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "영수증 하단 바코드 노출여부"
    },
    IsBtoBSendData: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "소매프로그램 자동 사입여부"
    },
    IsBoardTd: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "소매홍보게시판 사용여부(사용안함)"
    },
    IsETax: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "전자세금계산서 사용여부"
    },
    ETaxID: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "팝빌ID"
    },
    ETaxPW: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "팝빌 비밀번호"
    },
    ETaxTel: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "080 수신거부 번호"
    },
    IsVAT: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "부가세산정 사용여부"
    },
    VATRate: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 10.00,
      comment: "부가세율"
    },
    CardVANName: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "신용카드 VAN사"
    },
    CardCATID: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "신용카드 CAT_ID"
    },
    MobilePayVANName: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "해외모바일페이 VAN사"
    },
    MobilePayCATID: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "해외모바일페이 CATID"
    },
    MobilePayVANName2: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "국내모바일페이 VAN사"
    },
    MobilePayCATID2: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "국내모바일페이 CATID"
    },
    IsTaxRefund: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "택스리펀드 사용여부"
    },
    CATFirmNo: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "CAT 사업자번호"
    },
    IsCard: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "신용카드 사용여부"
    },
    ICPort: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "IC리더기 포트"
    },
    SignPort: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "싸인패드 포트"
    },
    IsMobilePay: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "모바일페이 사용여부"
    },
    TaxRefundVersion: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "택스리펀드 버전"
    },
    TaxRefundID: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "택스리펀드 ID"
    },
    IsPassport: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "여권스캐너 사용여부"
    },
    IsBank: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "통장관리 사용여부"
    }
  }, {
    sequelize,
    tableName: 'sitemt',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SiteID" },
        ]
      },
      {
        name: "Index1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SiteName" },
        ]
      },
    ]
  });
};
