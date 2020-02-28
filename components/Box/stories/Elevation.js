"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("../../../themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ElevationBox = function ElevationBox() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet
  }, _react["default"].createElement(_mnetUiBase.Box, {
    pad: "small",
    align: "start"
  }, _react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium",
    background: "dark-1",
    elevation: "medium",
    gap: "medium"
  }, _react["default"].createElement(_mnetUiBase.Text, null, "dark on white"), _react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium",
    elevation: "medium",
    gap: "medium"
  }, _react["default"].createElement(_mnetUiBase.Text, null, "dark on dark"), _react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium",
    background: "light-1",
    elevation: "medium",
    gap: "medium"
  }, _react["default"].createElement(_mnetUiBase.Text, null, "light on dark"), _react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium",
    elevation: "medium"
  }, _react["default"].createElement(_mnetUiBase.Text, null, "light on light")))))));
};

(0, _react2.storiesOf)('Box', module).add('Elevation', function () {
  return _react["default"].createElement(ElevationBox, null);
});