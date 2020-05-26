"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PlainLayer = function PlainLayer() {
  return _react["default"].createElement("div", {
    style: {
      width: '100vw',
      height: '100vh',
      overflow: 'auto'
    }
  }, _react["default"].createElement(_mnetUiBase.Box, {
    fill: true,
    background: "dark-3"
  }, _react["default"].createElement(_mnetUiBase.Layer, {
    margin: "medium",
    plain: true
  }, _react["default"].createElement(_mnetUiBase.Box, {
    pad: "large",
    border: {
      color: 'accent-1',
      size: 'large'
    }
  }, _react["default"].createElement(_mnetUiBase.Text, {
    color: "accent-2"
  }, "Text")))));
};

(0, _react2.storiesOf)('Layer', module).add('Plain', function () {
  return _react["default"].createElement(PlainLayer, null);
});