"use strict";

exports.__esModule = true;
exports.OptionWithCheckControl = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _FormCheckmark = require("grommet-icons/icons/FormCheckmark");

var _FormSubtract = require("grommet-icons/icons/FormSubtract");

var _Add = require("grommet-icons/icons/Add");

var _Box = require("../Box");

var _Text = require("../Text");

var _StyledMultiSelect = require("./StyledMultiSelect");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var OptionWithCheckControl = function OptionWithCheckControl(_ref) {
  var selected = _ref.selected,
      label = _ref.label,
      inclusionExclusion = _ref.inclusionExclusion,
      isExcluded = _ref.isExcluded,
      onSelect = _ref.onSelect,
      index = _ref.index;
  var theme = (0, _react.useContext)(_styledComponents.ThemeContext) || defaultProps.theme;

  var selectOptionsStyle = _extends({}, theme.select.options.box, theme.select.options.container);

  var renderCheckbox = function renderCheckbox(check, exc) {
    return /*#__PURE__*/_react["default"].createElement(_StyledMultiSelect.CheckBoxWrapper, theme.multiselect.checkbox.box, /*#__PURE__*/_react["default"].createElement(_StyledMultiSelect.CheckBox, _extends({
      role: "checkbox",
      "aria-label": (exc ? check : 'select') + " checkbox for " + label,
      className: "option-checkbox-" + (selected || inclusionExclusion && isExcluded === null ? 'active' : 'inactive')
    }, theme.multiselect.checkbox.check, {
      active: selected || inclusionExclusion && isExcluded === null,
      isExcluded: exc,
      onClick: inclusionExclusion && isExcluded === null ? function (event) {
        return onSelect(event, exc, index);
      } : undefined
    }), (selected || !selected || inclusionExclusion && isExcluded === null) && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, check === 'check' && /*#__PURE__*/_react["default"].createElement(_FormCheckmark.FormCheckmark, theme.multiselect.checkbox.checkmark), check === 'add' && /*#__PURE__*/_react["default"].createElement(_Add.Add, _extends({}, theme.multiselect.checkbox.checkmark, {
      color: inclusionExclusion ? theme.multiselect.includeBtn.color : 'brand',
      size: "small"
    })), check === 'subtract' && /*#__PURE__*/_react["default"].createElement(_FormSubtract.FormSubtract, _extends({}, theme.multiselect.checkbox.checkmark, {
      color: theme.multiselect.excludeBtn.color,
      size: "small"
    })))));
  };

  return /*#__PURE__*/_react["default"].createElement(_StyledMultiSelect.SelectedOption, _extends({}, selectOptionsStyle, {
    selected: selected
  }), /*#__PURE__*/_react["default"].createElement(_Box.Box, theme.multiselect.option, /*#__PURE__*/_react["default"].createElement(_Box.Box, null, /*#__PURE__*/_react["default"].createElement(_Text.Text, _extends({
    role: "option",
    "aria-label": "multiselect option value"
  }, theme.select.options.text), label)), !inclusionExclusion && /*#__PURE__*/_react["default"].createElement(_Box.Box, null, renderCheckbox('add', null)), inclusionExclusion && (isExcluded === null || isExcluded !== null) && /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    direction: "row"
  }, [null, false].includes(isExcluded) && renderCheckbox('add', false), [null, true].includes(isExcluded) && renderCheckbox('subtract', true))));
};

exports.OptionWithCheckControl = OptionWithCheckControl;