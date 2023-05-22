const escpos = require("escpos");
// install escpos-usb adapter module manually
escpos.USB = require("escpos-usb");
// Select the adapter based on your printer type

//console.log(escpos.USB.findPrinter());
//const device = new escpos.USB(0x04b8, 0x0202);

console.log("프린터목록");
console.log(escpos.USB.findPrinter());
const device = new escpos.USB(1317, 42752);

//escpos.Network = require("escpos-network");
//const device = new escpos.Network("192.168.0.150");

//escpos.Serial = require("escpos-serialport");
//escpos.SerialPort = require("escpos-serialport");
//const options = { baudRate: 14400, stopBit: 2 };

//var SerialPort = require("serialport");
//const serialDeviceOnWindows = new escpos.SerialPort("COM10");

//const device = new escpos.SerialPort("COM10", options);
//const device = new escpos.Serial("/dev/usb/lp0");

const options = { encoding: "GB18030" /* default */ };
// encoding is optional

//const printer = new escpos.Printer(port, options);
const printer = new escpos.Printer(device, options);

device.open(function (error) {
  printer
    .font("a")
    .align("ct")
    .style("bu")
    .size(1, 1)
    .text("eos pos test")
    .text(" ")
    .barcode("1234567", "EAN8")
    .table(["One", "Two", "Three"])
    .tableCustom(
      [
        { text: "Left", align: "LEFT", width: 0.33, style: "B" },
        { text: "Center", align: "CENTER", width: 0.33 },
        { text: "Right", align: "RIGHT", width: 0.33 },
      ],
      { encoding: "cp857", size: [1, 1] } // Optional
    )
    .qrimage("https://github.com/song940/node-escpos", function (err) {
      this.cut();
      this.close();
    });
});
