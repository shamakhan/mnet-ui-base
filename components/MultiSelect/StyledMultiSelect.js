"use strict";

exports.__esModule = true;
exports.OptionBox = exports.SelectOption = exports.OptionsBox = exports.CheckBoxWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../../utils");

var _Box = require("../Box");

var _Button = require("../Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CheckBoxWrapper = (0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "StyledMultiSelect__CheckBoxWrapper",
  componentId: "sc-1yaxkjp-0"
})(["", ";"], function (props) {
  return props.theme.multiselect.checkbox.extend;
});
exports.CheckBoxWrapper = CheckBoxWrapper;

var OptionsBox = _styledComponents["default"].div.withConfig({
  displayName: "StyledMultiSelect__OptionsBox",
  componentId: "sc-1yaxkjp-1"
})(["position:relative;scroll-behavior:smooth;overflow:auto;"]);

exports.OptionsBox = OptionsBox;
var SelectOption = (0, _styledComponents["default"])(_Button.Button).withConfig({
  displayName: "StyledMultiSelect__SelectOption",
  componentId: "sc-1yaxkjp-2"
})(["display:block;width:100%;"]);
exports.SelectOption = SelectOption;
var OptionBox = (0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "StyledMultiSelect__OptionBox",
  componentId: "sc-1yaxkjp-3"
})(["", ""], function (props) {
  return props.selected && _utils.selectedStyle;
});
exports.OptionBox = OptionBox;