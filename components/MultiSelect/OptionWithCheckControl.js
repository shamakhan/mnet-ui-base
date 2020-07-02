"use strict";

exports.__esModule = true;
exports.OptionWithCheckControl = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _FormCheckmark = require("grommet-icons/icons/FormCheckmark");

var _Box = require("../Box");

var _Text = require("../Text");

var _StyledMultiSelect = require("./StyledMultiSelect");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var OptionWithCheckControl = function OptionWithCheckControl(_ref) {
  var selected = _ref.selected,
      label = _ref.label;
  var theme = (0, _react.useContext)(_styledComponents.ThemeContext) || defaultProps.theme;

  var selectOptionsStyle = _extends({}, theme.select.options.box, theme.select.options.container);

  return /*#__PURE__*/_react["default"].createElement(_StyledMultiSelect.OptionBox, _extends({}, selectOptionsStyle, {
    selected: selected
  }), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    direction: "row"
  }, /*#__PURE__*/_react["default"].createElement(_StyledMultiSelect.CheckBoxWrapper, theme.multiselect.checkbox.box, /*#__PURE__*/_react["default"].createElement(_Box.Box, _extends({}, theme.multiselect.checkbox.check, {
    background: selected ? theme.multiselect.checkbox.check.active.background : 'white',
    border: {
      color: selected ? theme.multiselect.checkbox.check.active.background : theme.multiselect.checkbox.check.active.border
    }
  }), selected && /*#__PURE__*/_react["default"].createElement(_FormCheckmark.FormCheckmark, theme.multiselect.checkbox.checkmark))), /*#__PURE__*/_react["default"].createElement(_Text.Text, theme.select.options.text, label)));
};

exports.OptionWithCheckControl = OptionWithCheckControl;