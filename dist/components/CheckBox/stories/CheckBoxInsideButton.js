"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CheckBoxInsideButton = function CheckBoxInsideButton() {
  var _useState = (0, _react.useState)(false),
      checked = _useState[0],
      setChecked = _useState[1];

  var onButtonClick = function onButtonClick() {
    return setChecked(!checked);
  };

  var onCheckboxChange = function onCheckboxChange() {};

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    hoverIndicator: "background",
    onClick: onButtonClick
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.CheckBox, {
    tabIndex: "-1",
    checked: checked,
    label: /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "Hi"),
    onChange: onCheckboxChange
  }))));
};

(0, _react2.storiesOf)('CheckBox', module).add('Inside a Button', function () {
  return /*#__PURE__*/_react["default"].createElement(CheckBoxInsideButton, null);
});