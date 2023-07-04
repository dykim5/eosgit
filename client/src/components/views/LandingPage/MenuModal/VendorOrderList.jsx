import { render } from "react-thermal-printer";
import UserReceipt from "./UserReceipt";

const VendorOrderListItem = (props) => {
  const orderInfo = props.orderInfo;

  const onClickPrintHandler = async () => {
    //const data = await render(UserReceipt({ orderinfo }));
    const data = await render(UserReceipt({}));
    const port = await window.navigator.serial.requestPort();
    await port.open({ baudRate: 9600 });
    const writer = port.writable?.getWriter();
    if (writer !== null) {
      await writer.write(data);
      await writer.releaseLock();
    }
    await port.close({ baudRate: 9600 });
  };

  return (
    <container>
      ...
      <button
        onClick={async () => {
          await onClickPrintHandler();
          //await toggleAlertDialog("smartorder-preparing");
        }}
      >
        {" "}
        접수하기{" "}
      </button>
      ...
    </container>
  );
};
