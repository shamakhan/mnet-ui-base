"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("../../../themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RTLBox = function RTLBox() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet,
    dir: "rtl"
  }, _react["default"].createElement(_mnetUiBase.Box, {
    direction: "row",
    align: "center",
    pad: "small",
    gap: "small",
    border: true
  }, _react["default"].createElement(_mnetUiBase.Box, {
    direction: "row",
    align: "center",
    pad: "small",
    border: "start"
  }, "border start"), _react["default"].createElement(_mnetUiBase.Box, {
    direction: "row",
    align: "center",
    pad: {
      start: 'large'
    },
    background: "brand"
  }, "pad start"), _react["default"].createElement(_mnetUiBase.Box, {
    direction: "row",
    align: "center",
    margin: {
      start: 'large'
    },
    background: "brand"
  }, "margin start")));
};

(0, _react2.storiesOf)('Box', module).add('RTL', function () {
  return _react["default"].createElement(RTLBox, null);
});