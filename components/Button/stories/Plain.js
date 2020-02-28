"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _grommetIcons = require("grommet-icons");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PlainButton = function PlainButton(props) {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet
  }, _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, _react["default"].createElement(_mnetUiBase.Button, _extends({
    hoverIndicator: "light-1",
    onClick: function onClick() {}
  }, props), _react["default"].createElement(_mnetUiBase.Box, {
    pad: "small",
    direction: "row",
    align: "center",
    gap: "small"
  }, _react["default"].createElement(_grommetIcons.Add, null), _react["default"].createElement(_mnetUiBase.Text, null, "Add")))));
};

(0, _react2.storiesOf)('Button', module).add('Active', function () {
  return _react["default"].createElement(PlainButton, {
    active: true
  });
}).add('Plain', function () {
  return _react["default"].createElement(PlainButton, null);
});