"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var BasicButtons = function BasicButtons(props) {
  return _react["default"].createElement("div", null, _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "medium"
  }, _react["default"].createElement(_mnetUiBase.Button, _extends({
    label: "Default",
    onClick: function onClick() {}
  }, props))), _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "medium"
  }, _react["default"].createElement(_mnetUiBase.Button, {
    label: "Anchor",
    href: "#"
  })), _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "medium"
  }, _react["default"].createElement(_mnetUiBase.Button, _extends({
    disabled: true,
    label: "Disabled",
    onClick: function onClick() {}
  }, props))), _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "medium"
  }, _react["default"].createElement(_mnetUiBase.Button, _extends({
    primary: true,
    label: "Primary",
    onClick: function onClick() {}
  }, props))), _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "medium"
  }, _react["default"].createElement(_mnetUiBase.Button, _extends({
    primary: true,
    label: "Active Primary",
    active: true,
    onClick: function onClick() {}
  }, props))));
};

(0, _react2.storiesOf)('Button', module).add('Basic', function () {
  return _react["default"].createElement(BasicButtons, null);
});