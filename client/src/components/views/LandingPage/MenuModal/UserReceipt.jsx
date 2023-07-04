import { Br, Cut, Line, Printer, Text, Row } from "react-thermal-printer";
import moment from "moment";
//import { Typography } from "@mui/material";

const UserReceipt = (props) => {
  //   const { orderinfo } = props;

  //   if (!orderinfo) return <></>;

  return (
    <Printer type="epson" width={42} characterSet="korea">
      <flexBox sx={{ alignItems: "center", justifyContent: "center" }}>
        <Text>주방주문서</Text>
      </flexBox>
      {/* <Text size={{ width: 2, height: 2 }}>[주문시간] {moment(orderinfo?.paymentDt).format("YYYY-MM-DD HH:mm")}</Text>
      <Text>[오더번호] {String(orderinfo[0]).slice(-3)}</Text> */}
      <Line />
      <Row left="메뉴명" right="수량(구분)" />
      <Line />
      <Br />
      {/* <FlexBox sx={{ flexDirection: "column" }}>
        {orderItem &&
          orderItem?.map((item, index) => {
            return (
              <>
                <Row left={item.goodsNm} right={`${item.goodsCnt} (신규)`} />
                {item.optionInfo !== null && <Row left={`ㄴ ${item.optionInfo}`} right={`${item.goodsCnt} (속성)`} />}
              </>
            );
          })}
        <Br />
      </FlexBox> */}
      <Line />
      <Text>매장컵</Text>
      <Line />
      <Br />
      <Line />
      <Cut />
    </Printer>
  );
};

export default UserReceipt;
