"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SimpleSelect = function SimpleSelect(_ref) {
  var theme = _ref.theme,
      rest = _objectWithoutPropertiesLoose(_ref, ["theme"]);

  var options = ['one', 'two'];

  var _useState = (0, _react.useState)(''),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = (0, _react.useState)(false),
      open = _useState2[0],
      setOpen = _useState2[1];

  return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MnetUIBase, {
    full: true,
    theme: theme || _themes.mnet
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    fill: true,
    align: "center",
    justify: "start",
    pad: "large",
    gap: "small"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    onClick: function onClick() {
      return setOpen(!open);
    },
    label: "Control the select"
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Select, _extends({
    id: "select",
    name: "select",
    placeholder: "Select",
    open: open,
    value: value,
    options: options,
    onChange: function onChange(_ref2) {
      var option = _ref2.option;
      return setValue(option);
    }
  }, rest))));
};

(0, _react2.storiesOf)('Select', module).add('Controlled', function () {
  return /*#__PURE__*/_react["default"].createElement(SimpleSelect, null);
});