"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledPlaceholder = function StyledPlaceholder() {
  return _react["default"].createElement(_mnetUiBase.Box, null, _react["default"].createElement(_mnetUiBase.Form, null, _react["default"].createElement(_mnetUiBase.TextInput, {
    name: "name",
    placeholder: _react["default"].createElement(_mnetUiBase.Text, null, "footer")
  })));
};

(0, _react2.storiesOf)('TextInput', module).add('StyledPlaceholder', function () {
  return _react["default"].createElement(StyledPlaceholder, null);
});