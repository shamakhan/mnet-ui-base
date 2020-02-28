"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("../../../themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var GradientColorBox = function GradientColorBox() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet
  }, _react["default"].createElement(_mnetUiBase.Box, {
    justify: "center",
    align: "center",
    pad: "xlarge",
    background: "linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)",
    round: "large"
  }, _react["default"].createElement(_mnetUiBase.Text, {
    color: "white"
  }, "I have a linear gradient background")));
};

(0, _react2.storiesOf)('Box', module).add('Gradient', function () {
  return _react["default"].createElement(GradientColorBox, null);
});