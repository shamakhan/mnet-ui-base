"use strict";

exports.__esModule = true;
exports.StyledHelperTextWrapper = exports.StyledSuggestions = exports.StyledIcon = exports.StyledPlaceholder = exports.StyledTextInputContainer = exports.StyledTextInput = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _utils = require("../../utils");

var _defaultProps = require("../../default-props");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var sizeStyle = function sizeStyle(props) {
  var data = props.theme.text[props.size];
  return (0, _styledComponents.css)(["font-size:", ";line-height:", ";"], data.size, data.height);
};

var plainStyle = (0, _styledComponents.css)(["outline:none;border:none;box-shadow:none;"]);

var StyledTextInput = _styledComponents["default"].input.withConfig({
  displayName: "StyledTextInput",
  componentId: "ilbntv-0"
})(["", " width:100%;", " ", " ", " ", " &::-moz-focus-inner{border:none;outline:none;}", ";", " ", ";box-shadow:none;", " border-bottom-width:2px;", " ", " transition:width 0.2s ease 0s,background 0.2s ease 0s,border 0.2s ease 0s;"], _utils.inputStyle, function (props) {
  return props.size && sizeStyle(props);
}, function (props) {
  return props.plain && plainStyle;
}, _utils.placeholderStyle, function (props) {
  return props.icon && (props.reverse ? "padding-right: " + props.theme.global.edgeSize.large + ";" : "padding-left: " + props.theme.global.edgeSize.large + ";");
}, function (props) {
  return props.focus && !props.plain && (0, _utils.focusStyle)();
}, function (props) {
  return props.disabled && (0, _utils.disabledStyle)(props.theme.textInput.disabled && props.theme.textInput.disabled.opacity);
}, function (props) {
  return props.theme.textInput && props.theme.textInput.extend;
}, function (props) {
  return !props.plain && "border: " + props.theme.textInput.border;
}, function (props) {
  return props.focus && props.theme.textInput.focus;
}, function (props) {
  return props.error && props.theme.textInput.error.extend;
});

exports.StyledTextInput = StyledTextInput;
StyledTextInput.defaultProps = {};
Object.setPrototypeOf(StyledTextInput.defaultProps, _defaultProps.defaultProps);

var StyledTextInputContainer = _styledComponents["default"].div.withConfig({
  displayName: "StyledTextInput__StyledTextInputContainer",
  componentId: "ilbntv-1"
})(["position:relative;width:100%;", ";"], function (props) {
  return props.theme.textInput && props.theme.textInput.container && props.theme.textInput.container.extend;
});

exports.StyledTextInputContainer = StyledTextInputContainer;
StyledTextInputContainer.defaultProps = {};
Object.setPrototypeOf(StyledTextInputContainer.defaultProps, _defaultProps.defaultProps);

var StyledPlaceholder = _styledComponents["default"].div.withConfig({
  displayName: "StyledTextInput__StyledPlaceholder",
  componentId: "ilbntv-2"
})(["position:absolute;left:", "px;top:50%;transform:translateY(-50%);display:flex;justify-content:center;pointer-events:none;", ";"], function (props) {
  return (0, _utils.parseMetricToNum)((0, _utils.getInputPadBySide)(props, 'left')) - (0, _utils.parseMetricToNum)(props.theme.global.control.border.width);
}, function (props) {
  return props.theme.textInput && props.theme.textInput.placeholder && props.theme.textInput.placeholder.extend;
});

exports.StyledPlaceholder = StyledPlaceholder;
StyledPlaceholder.defaultProps = {};
Object.setPrototypeOf(StyledPlaceholder.defaultProps, _defaultProps.defaultProps);

var StyledIcon = _styledComponents["default"].div.withConfig({
  displayName: "StyledTextInput__StyledIcon",
  componentId: "ilbntv-3"
})(["position:absolute;display:flex;justify:center;top:50%;transform:translateY(-50%);", ""], function (props) {
  return props.reverse ? "right: " + (0, _utils.getInputPadBySide)(props, 'right') + ";" : "left: " + (0, _utils.getInputPadBySide)(props, 'left') + ";";
});

exports.StyledIcon = StyledIcon;

var StyledHelperTextWrapper = _styledComponents["default"].div.withConfig({
  displayName: "StyledTextInput__StyledHelperTextWrapper",
  componentId: "ilbntv-4"
})(["display:flex;flex-direction:column;"]);

exports.StyledHelperTextWrapper = StyledHelperTextWrapper;

var StyledSuggestions = _styledComponents["default"].ol.withConfig({
  displayName: "StyledTextInput__StyledSuggestions",
  componentId: "ilbntv-5"
})(["border-top-left-radius:0;border-top-right-radius:0;margin:0;padding:0;list-style-type:none;", ";"], function (props) {
  return props.theme.textInput && props.theme.textInput.suggestions && props.theme.textInput.suggestions.extend;
});

exports.StyledSuggestions = StyledSuggestions;
StyledSuggestions.defaultProps = {};
Object.setPrototypeOf(StyledSuggestions.defaultProps, _defaultProps.defaultProps);