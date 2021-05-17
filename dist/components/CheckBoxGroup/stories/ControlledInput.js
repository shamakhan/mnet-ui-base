"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CheckBoxGroupForm = function CheckBoxGroupForm() {
  var _useState = (0, _react.useState)(),
      value = _useState[0],
      setValue = _useState[1];

  return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium",
    width: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Form, {
    onSubmit: function onSubmit(_ref) {
      var values = _ref.value,
          touched = _ref.touched;
      return (// 'touched' is a single boolean value indication of
        // whether any of the checkboxes had changed.
        console.log('Submit', values, touched)
      );
    }
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.FormField, {
    name: "controlled"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.CheckBoxGroup, {
    id: "check-box-group-id",
    name: "controlled",
    value: value,
    onChange: function onChange(_ref2) {
      var nextValue = _ref2.value;
      return setValue(nextValue);
    },
    options: ['Maui', 'Jerusalem', 'Wuhan']
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    type: "submit",
    label: "Submit"
  }))));
};

(0, _react2.storiesOf)('CheckBoxGroup', module).add('Form controlled input', function () {
  return /*#__PURE__*/_react["default"].createElement(CheckBoxGroupForm, null);
});