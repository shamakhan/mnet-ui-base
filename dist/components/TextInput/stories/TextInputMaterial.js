"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _mnetUiBaseThemeHb = require("mnet-ui-base-theme-hb");

var _Text = require("../../Text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TextInputMaterial = function TextInputMaterial() {
  var _React$useState = _react["default"].useState(''),
      value = _React$useState[0],
      setValue = _React$useState[1];

  var onChange = function onChange(event) {
    return setValue(event.target.value);
  };

  return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MnetUIBase, {
    full: true,
    theme: _mnetUiBaseThemeHb.hb
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    justify: "start",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_Text.Text, null, "Ad Unit Name")), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    width: "large",
    height: "40px"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TextInput, {
    custom: true,
    value: value,
    plain: Boolean(value),
    onChange: onChange
  }))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    justify: "start",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_Text.Text, null, "Div Id")), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    width: "medium",
    height: "40px"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TextInput, {
    pad: "xxlarge",
    margin: "xxlarge",
    value: value,
    error: true,
    errorMessage: "Incorrect Entry",
    onChange: onChange
  }))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    justify: "start",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_Text.Text, null, "Div Id")), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    width: "small",
    height: "40px"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TextInput, {
    pad: "xxlarge",
    margin: "xxlarge",
    value: value // plain={Boolean(value)}
    ,
    error: !value,
    errorMessage: "This field is required!",
    onChange: onChange
  }))));
};

(0, _react2.storiesOf)('TextInput', module).add('TextInputMaterial', function () {
  return /*#__PURE__*/_react["default"].createElement(TextInputMaterial, null);
});