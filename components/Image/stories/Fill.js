"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Fill = function Fill() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet
  }, _react["default"].createElement(_mnetUiBase.Box, {
    align: "start",
    gap: "small"
  }, _react["default"].createElement(_mnetUiBase.Box, {
    height: "small",
    width: "small",
    border: true
  }, _react["default"].createElement(_mnetUiBase.Anchor, {
    href: "#"
  }, _react["default"].createElement(_mnetUiBase.Image, {
    fit: "cover",
    fill: true,
    src: "//v2.grommet.io/assets/IMG_4245.jpg"
  }))), _react["default"].createElement(_mnetUiBase.Box, {
    height: "small",
    width: "small",
    border: true
  }, _react["default"].createElement(_mnetUiBase.Anchor, {
    href: "#"
  }, _react["default"].createElement(_mnetUiBase.Image, {
    fit: "contain",
    fill: true,
    src: "//v2.grommet.io/assets/IMG_4245.jpg"
  })))));
};

(0, _react2.storiesOf)('Image', module).add('Fill', function () {
  return _react["default"].createElement(Fill, null);
});