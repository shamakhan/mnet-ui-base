"use strict";

exports.__esModule = true;
exports.OptionChips = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Close = require("grommet-icons/icons/Close");

var _Box = require("../Box");

var _Button = require("../Button");

var _Text = require("../Text");

var _StyledMultiSelect = require("./StyledMultiSelect");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var OptionChips = function OptionChips(_ref) {
  var options = _ref.options,
      value = _ref.value,
      isSelected = _ref.isSelected,
      optionLabel = _ref.optionLabel,
      selectOption = _ref.selectOption,
      clearAll = _ref.clearAll,
      width = _ref.width;
  var theme = (0, _react.useContext)(_styledComponents.ThemeContext) || defaultProps.theme;
  var OptionWrapper = (0, _styledComponents["default"])(_Box.Box).withConfig({
    displayName: "OptionChips__OptionWrapper",
    componentId: "sc-1w3ospt-0"
  })(["", ";"], function (props) {
    return props.theme.multiselect.chips.wrapper.extend;
  });

  var getSelectedOption = function getSelectedOption() {
    return options.reduce(function (acc, item, index) {
      if (isSelected(index)) acc.push(index);
      return acc;
    }, []);
  };

  return /*#__PURE__*/_react["default"].createElement(_StyledMultiSelect.OptionsBox, null, Array.isArray(value) && value.length > 0 && /*#__PURE__*/_react["default"].createElement(OptionWrapper, _extends({
    width: width
  }, theme.multiselect.chips.wrapper, {
    wrap: true
  }), getSelectedOption().map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_Box.Box, _extends({
      key: item
    }, theme.multiselect.chips.option), /*#__PURE__*/_react["default"].createElement(_Text.Text, theme.multiselect.chips.label, optionLabel(item)), /*#__PURE__*/_react["default"].createElement(_Close.Close, _extends({
      onClick: selectOption(item)
    }, theme.multiselect.chips.icon)));
  }), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    focusIndicator: false,
    onClick: function onClick() {
      return clearAll([]);
    },
    plain: true
  }, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    border: {
      side: 'bottom',
      color: theme.multiselect.chips.clear.color
    }
  }, /*#__PURE__*/_react["default"].createElement(_Text.Text, theme.multiselect.chips.clear, "CLEAR ALL")))));
};

exports.OptionChips = OptionChips;