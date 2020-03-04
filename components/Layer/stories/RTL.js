"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RTLLayer = function RTLLayer() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet,
    dir: "rtl"
  }, _react["default"].createElement(_mnetUiBase.Layer, {
    position: "start",
    margin: {
      vertical: 'small',
      start: 'xlarge',
      end: 'medium'
    }
  }, _react["default"].createElement(_mnetUiBase.Box, {
    height: "small",
    overflow: "auto"
  }, _react["default"].createElement(_mnetUiBase.Box, {
    pad: "xlarge"
  }, "text"), _react["default"].createElement(_mnetUiBase.Box, {
    pad: "xlarge"
  }, "text"), _react["default"].createElement(_mnetUiBase.Box, {
    pad: "xlarge"
  }, "text"), _react["default"].createElement(_mnetUiBase.Box, {
    pad: "xlarge"
  }, "text"), _react["default"].createElement(_mnetUiBase.Box, {
    pad: "xlarge"
  }, "text"), _react["default"].createElement(_mnetUiBase.Box, {
    pad: "xlarge"
  }, "text"))));
};

(0, _react2.storiesOf)('Layer', module).add('RTL', function () {
  return _react["default"].createElement(RTLLayer, null);
});