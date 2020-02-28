"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Simple = function Simple() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _mnetUiBase.mnet
  }, _react["default"].createElement(_mnetUiBase.Main, {
    background: "light-2",
    elevation: "large",
    pad: "large",
    gap: "large"
  }, _react["default"].createElement(_mnetUiBase.Text, {
    margin: "small",
    size: "xsmall"
  }, "Main Content"), _react["default"].createElement(_mnetUiBase.Box, {
    flex: true
  })), _react["default"].createElement(_mnetUiBase.Footer, {
    background: "light-4",
    justify: "center",
    pad: "small"
  }, _react["default"].createElement(_mnetUiBase.Text, {
    textAlign: "center",
    size: "small"
  }, "\xA9 2019 Copyright MnetUIBase")));
};

(0, _react2.storiesOf)('Footer', module).add('Simple', function () {
  return _react["default"].createElement(Simple, null);
});