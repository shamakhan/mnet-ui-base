"use strict";

exports.__esModule = true;
exports.Searchbox = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _Search = require("grommet-icons/icons/Search");

var _Box = require("../Box");

var _Text = require("../Text");

var _TextInput = require("../TextInput");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Searchbox = function Searchbox(_ref) {
  var placeholder = _ref.placeholder,
      value = _ref.value,
      onValueChange = _ref.onValueChange;
  var theme = (0, _react.useContext)(_styledComponents.ThemeContext) || defaultProps.theme;

  var handleChange = function handleChange(textValue) {
    if (textValue.replace(/\s/g, '').length || !textValue.length) return onValueChange(textValue);
    return null;
  };

  return /*#__PURE__*/_react["default"].createElement(_Box.Box, theme.multiselect.searchbox.container, /*#__PURE__*/_react["default"].createElement(_TextInput.TextInput, {
    plain: true,
    value: value,
    valueLabel: /*#__PURE__*/_react["default"].createElement(_Text.Text, null, "value"),
    onChange: function onChange(event) {
      return handleChange(event.target.value);
    },
    placeholder: /*#__PURE__*/_react["default"].createElement(_Text.Text, theme.multiselect.searchbox.placeholder, value ? '' : placeholder)
  }), /*#__PURE__*/_react["default"].createElement(_Search.Search, theme.multiselect.searchbox.icon));
};

exports.Searchbox = Searchbox;