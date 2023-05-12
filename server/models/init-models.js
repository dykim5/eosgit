var DataTypes = require("sequelize").DataTypes;
var _acntmt = require("./acntmt");
var _acnttd = require("./acnttd");
var _aggdtd = require("./aggdtd");
var _aggtd = require("./aggtd");
var _bankmt = require("./bankmt");
var _banktd = require("./banktd");
var _byrdtd = require("./byrdtd");
var _byrmt = require("./byrmt");
var _byrprice = require("./byrprice");
var _byrtd = require("./byrtd");
var _carddtd = require("./carddtd");
var _cardmt = require("./cardmt");
var _closetd = require("./closetd");
var _cmdmt = require("./cmdmt");
var _configmt = require("./configmt");
var _fieldmt = require("./fieldmt");
var _imagemt = require("./imagemt");
var _insad = require("./insad");
var _insag = require("./insag");
var _insdtd = require("./insdtd");
var _instd = require("./instd");
var _itemmt = require("./itemmt");
var _kindmt = require("./kindmt");
var _labelmd = require("./labelmd");
var _labelmt = require("./labelmt");
var _lastno = require("./lastno");
var _logacntmt = require("./logacntmt");
var _logacnttd = require("./logacnttd");
var _logbyrdtd = require("./logbyrdtd");
var _logbyrmt = require("./logbyrmt");
var _logbyrtd = require("./logbyrtd");
var _logclosetd = require("./logclosetd");
var _logitemmt = require("./logitemmt");
var _logmovedtd = require("./logmovedtd");
var _logmovetd = require("./logmovetd");
var _logorderdtd = require("./logorderdtd");
var _logordertd = require("./logordertd");
var _logsampledtd = require("./logsampledtd");
var _logsampletd = require("./logsampletd");
var _logshopmt = require("./logshopmt");
var _logslrdtd = require("./logslrdtd");
var _logslrmt = require("./logslrmt");
var _logslrtd = require("./logslrtd");
var _logtd = require("./logtd");
var _logunsenddtd = require("./logunsenddtd");
var _logunsendtd = require("./logunsendtd");
var _logvatdtd = require("./logvatdtd");
var _logvattd = require("./logvattd");
var _losstd = require("./losstd");
var _maketd = require("./maketd");
var _menumt = require("./menumt");
var _mobilepaydtd = require("./mobilepaydtd");
var _movedtd = require("./movedtd");
var _movetd = require("./movetd");
var _noticetd = require("./noticetd");
var _orderdtd = require("./orderdtd");
var _ordertd = require("./ordertd");
var _rcptmt = require("./rcptmt");
var _rsvdtd = require("./rsvdtd");
var _rsvtd = require("./rsvtd");
var _sampledtd = require("./sampledtd");
var _sampletd = require("./sampletd");
var _shoptd = require("./shoptd");
var _sitemt = require("./sitemt");
var _slrdtd = require("./slrdtd");
var _slrmt = require("./slrmt");
var _slrprice = require("./slrprice");
var _slrtd = require("./slrtd");
var _tagmd = require("./tagmd");
var _tagmt = require("./tagmt");
var _taxrefunddtd = require("./taxrefunddtd");
var _taxtd = require("./taxtd");
var _tradedtd = require("./tradedtd");
var _tradetd = require("./tradetd");
var _unsenddtd = require("./unsenddtd");
var _unsendtd = require("./unsendtd");
var _usermt = require("./usermt");
var _vatdtd = require("./vatdtd");
var _vattd = require("./vattd");

function initModels(sequelize) {
  var acntmt = _acntmt(sequelize, DataTypes);
  var acnttd = _acnttd(sequelize, DataTypes);
  var aggdtd = _aggdtd(sequelize, DataTypes);
  var aggtd = _aggtd(sequelize, DataTypes);
  var bankmt = _bankmt(sequelize, DataTypes);
  var banktd = _banktd(sequelize, DataTypes);
  var byrdtd = _byrdtd(sequelize, DataTypes);
  var byrmt = _byrmt(sequelize, DataTypes);
  var byrprice = _byrprice(sequelize, DataTypes);
  var byrtd = _byrtd(sequelize, DataTypes);
  var carddtd = _carddtd(sequelize, DataTypes);
  var cardmt = _cardmt(sequelize, DataTypes);
  var closetd = _closetd(sequelize, DataTypes);
  var cmdmt = _cmdmt(sequelize, DataTypes);
  var configmt = _configmt(sequelize, DataTypes);
  var fieldmt = _fieldmt(sequelize, DataTypes);
  var imagemt = _imagemt(sequelize, DataTypes);
  var insad = _insad(sequelize, DataTypes);
  var insag = _insag(sequelize, DataTypes);
  var insdtd = _insdtd(sequelize, DataTypes);
  var instd = _instd(sequelize, DataTypes);
  var itemmt = _itemmt(sequelize, DataTypes);
  var kindmt = _kindmt(sequelize, DataTypes);
  var labelmd = _labelmd(sequelize, DataTypes);
  var labelmt = _labelmt(sequelize, DataTypes);
  var lastno = _lastno(sequelize, DataTypes);
  var logacntmt = _logacntmt(sequelize, DataTypes);
  var logacnttd = _logacnttd(sequelize, DataTypes);
  var logbyrdtd = _logbyrdtd(sequelize, DataTypes);
  var logbyrmt = _logbyrmt(sequelize, DataTypes);
  var logbyrtd = _logbyrtd(sequelize, DataTypes);
  var logclosetd = _logclosetd(sequelize, DataTypes);
  var logitemmt = _logitemmt(sequelize, DataTypes);
  var logmovedtd = _logmovedtd(sequelize, DataTypes);
  var logmovetd = _logmovetd(sequelize, DataTypes);
  var logorderdtd = _logorderdtd(sequelize, DataTypes);
  var logordertd = _logordertd(sequelize, DataTypes);
  var logsampledtd = _logsampledtd(sequelize, DataTypes);
  var logsampletd = _logsampletd(sequelize, DataTypes);
  var logshopmt = _logshopmt(sequelize, DataTypes);
  var logslrdtd = _logslrdtd(sequelize, DataTypes);
  var logslrmt = _logslrmt(sequelize, DataTypes);
  var logslrtd = _logslrtd(sequelize, DataTypes);
  var logtd = _logtd(sequelize, DataTypes);
  var logunsenddtd = _logunsenddtd(sequelize, DataTypes);
  var logunsendtd = _logunsendtd(sequelize, DataTypes);
  var logvatdtd = _logvatdtd(sequelize, DataTypes);
  var logvattd = _logvattd(sequelize, DataTypes);
  var losstd = _losstd(sequelize, DataTypes);
  var maketd = _maketd(sequelize, DataTypes);
  var menumt = _menumt(sequelize, DataTypes);
  var mobilepaydtd = _mobilepaydtd(sequelize, DataTypes);
  var movedtd = _movedtd(sequelize, DataTypes);
  var movetd = _movetd(sequelize, DataTypes);
  var noticetd = _noticetd(sequelize, DataTypes);
  var orderdtd = _orderdtd(sequelize, DataTypes);
  var ordertd = _ordertd(sequelize, DataTypes);
  var rcptmt = _rcptmt(sequelize, DataTypes);
  var rsvdtd = _rsvdtd(sequelize, DataTypes);
  var rsvtd = _rsvtd(sequelize, DataTypes);
  var sampledtd = _sampledtd(sequelize, DataTypes);
  var sampletd = _sampletd(sequelize, DataTypes);
  var shoptd = _shoptd(sequelize, DataTypes);
  var sitemt = _sitemt(sequelize, DataTypes);
  var slrdtd = _slrdtd(sequelize, DataTypes);
  var slrmt = _slrmt(sequelize, DataTypes);
  var slrprice = _slrprice(sequelize, DataTypes);
  var slrtd = _slrtd(sequelize, DataTypes);
  var tagmd = _tagmd(sequelize, DataTypes);
  var tagmt = _tagmt(sequelize, DataTypes);
  var taxrefunddtd = _taxrefunddtd(sequelize, DataTypes);
  var taxtd = _taxtd(sequelize, DataTypes);
  var tradedtd = _tradedtd(sequelize, DataTypes);
  var tradetd = _tradetd(sequelize, DataTypes);
  var unsenddtd = _unsenddtd(sequelize, DataTypes);
  var unsendtd = _unsendtd(sequelize, DataTypes);
  var usermt = _usermt(sequelize, DataTypes);
  var vatdtd = _vatdtd(sequelize, DataTypes);
  var vattd = _vattd(sequelize, DataTypes);


  return {
    acntmt,
    acnttd,
    aggdtd,
    aggtd,
    bankmt,
    banktd,
    byrdtd,
    byrmt,
    byrprice,
    byrtd,
    carddtd,
    cardmt,
    closetd,
    cmdmt,
    configmt,
    fieldmt,
    imagemt,
    insad,
    insag,
    insdtd,
    instd,
    itemmt,
    kindmt,
    labelmd,
    labelmt,
    lastno,
    logacntmt,
    logacnttd,
    logbyrdtd,
    logbyrmt,
    logbyrtd,
    logclosetd,
    logitemmt,
    logmovedtd,
    logmovetd,
    logorderdtd,
    logordertd,
    logsampledtd,
    logsampletd,
    logshopmt,
    logslrdtd,
    logslrmt,
    logslrtd,
    logtd,
    logunsenddtd,
    logunsendtd,
    logvatdtd,
    logvattd,
    losstd,
    maketd,
    menumt,
    mobilepaydtd,
    movedtd,
    movetd,
    noticetd,
    orderdtd,
    ordertd,
    rcptmt,
    rsvdtd,
    rsvtd,
    sampledtd,
    sampletd,
    shoptd,
    sitemt,
    slrdtd,
    slrmt,
    slrprice,
    slrtd,
    tagmd,
    tagmt,
    taxrefunddtd,
    taxtd,
    tradedtd,
    tradetd,
    unsenddtd,
    unsendtd,
    usermt,
    vatdtd,
    vattd,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
