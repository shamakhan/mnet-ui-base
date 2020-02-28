"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var FormFieldToggle = function FormFieldToggle(props) {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _mnetUiBase.mnet
  }, _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, _react["default"].createElement(_mnetUiBase.FormField, _extends({
    label: "Label",
    htmlFor: "check-box"
  }, props), _react["default"].createElement(_mnetUiBase.Box, {
    pad: {
      horizontal: 'small',
      vertical: 'xsmall'
    }
  }, _react["default"].createElement(_mnetUiBase.CheckBox, {
    id: "check-box",
    label: "CheckBox",
    toggle: true
  })))));
};

(0, _react2.storiesOf)('Form', module).add('Toggle', function () {
  return _react["default"].createElement(FormFieldToggle, null);
});