"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Fit = function Fit() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet
  }, _react["default"].createElement(_mnetUiBase.Box, {
    align: "start",
    gap: "medium"
  }, _react["default"].createElement(_mnetUiBase.Box, {
    height: "small",
    width: "small",
    border: true
  }, _react["default"].createElement(_mnetUiBase.Image, {
    src: "//v2.grommet.io/assets/IMG_4245.jpg",
    fit: "contain"
  })), _react["default"].createElement(_mnetUiBase.Box, {
    height: "small",
    width: "small",
    border: true
  }, _react["default"].createElement(_mnetUiBase.Image, {
    src: "//v2.grommet.io/assets/IMG_4245.jpg",
    fit: "cover"
  }))));
};

(0, _react2.storiesOf)('Image', module).add('Fit', function () {
  return _react["default"].createElement(Fit, null);
});