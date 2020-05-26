"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var FormFieldCheckBox = function FormFieldCheckBox(props) {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, _react["default"].createElement(_mnetUiBase.Form, {
    onSubmit: function onSubmit(_ref) {
      var value = _ref.value,
          touched = _ref.touched;
      return console.log('Submit', value, touched);
    }
  }, _react["default"].createElement(_mnetUiBase.FormField, _extends({
    label: "Toggle",
    name: "toggle",
    htmlFor: "check-box-toggle"
  }, props), _react["default"].createElement(_mnetUiBase.Box, {
    pad: {
      horizontal: 'small',
      vertical: 'xsmall'
    }
  }, _react["default"].createElement(_mnetUiBase.CheckBox, {
    id: "check-box-toggle",
    name: "toggle",
    label: "CheckBox",
    toggle: true
  }))), _react["default"].createElement(_mnetUiBase.FormField, {
    label: "Default",
    name: "checkbox",
    htmlFor: "check-box",
    required: true
  }, _react["default"].createElement(_mnetUiBase.Box, {
    pad: {
      horizontal: 'small',
      vertical: 'xsmall'
    }
  }, _react["default"].createElement(_mnetUiBase.CheckBox, {
    id: "check-box",
    name: "checkbox",
    label: "Required"
  }))), _react["default"].createElement(_mnetUiBase.FormField, {
    label: "Where would you like to visit",
    name: "checkboxgroup",
    htmlFor: "check-box-group",
    required: true
  }, _react["default"].createElement(_mnetUiBase.Box, {
    pad: {
      horizontal: 'small',
      vertical: 'xsmall'
    }
  }, _react["default"].createElement(_mnetUiBase.CheckBoxGroup, {
    id: "group",
    name: "checkboxgroup",
    options: ['Maui', 'Jerusalem', 'Wuhan']
  }))), _react["default"].createElement(_mnetUiBase.Button, {
    type: "submit",
    label: "Submit"
  }))));
};

(0, _react2.storiesOf)('Form', module).add('CheckBox', function () {
  return _react["default"].createElement(FormFieldCheckBox, null);
});