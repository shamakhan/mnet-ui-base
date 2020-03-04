"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _grommetThemeHpe = require("grommet-theme-hpe");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Background = function Background() {
  var themeColor = 'background-back';
  var hexValue = '#DCD0FF';
  var cssColor = 'gold';
  return _react["default"].createElement(_mnetUiBase.Box, {
    gap: "medium"
  }, _react["default"].createElement(_mnetUiBase.MnetUIBase, null, _react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium"
  }, _react["default"].createElement(_mnetUiBase.Text, null, "MnetUIBase with no theme or background prop"))), _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _grommetThemeHpe.hpe,
    themeMode: "dark"
  }, _react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium"
  }, _react["default"].createElement(_mnetUiBase.Text, null, "MnetUIBase with theme & themeMode but no background prop"))), _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _grommetThemeHpe.hpe,
    themeMode: "light",
    background: themeColor
  }, _react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium"
  }, _react["default"].createElement(_mnetUiBase.Text, null, "MnetUIBase with background as theme color of '", themeColor, "'"))), _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _mnetUiBase.mnet,
    background: hexValue
  }, _react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium"
  }, _react["default"].createElement(_mnetUiBase.Text, null, "MnetUIBase with background as HEX value of '", hexValue, "'"))), _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _mnetUiBase.mnet,
    background: cssColor
  }, _react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium"
  }, _react["default"].createElement(_mnetUiBase.Text, null, "MnetUIBase with background as CSS color name of '", cssColor, "'"))), _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _mnetUiBase.mnet,
    background: {
      color: 'pink',
      image: 'url(http://librelogo.org/wp-content/uploads/2014/04/gradient2.png)'
    }
  }, _react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium"
  }, _react["default"].createElement(_mnetUiBase.Text, null, "MnetUIBase with background as object containing color and image"))));
};

(0, _react2.storiesOf)('MnetUIBase', module).add('Background', function () {
  return _react["default"].createElement(Background, null);
});