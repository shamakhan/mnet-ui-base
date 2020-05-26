"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Example = function Example() {
  var _useState = (0, _react.useState)(),
      haveAlias = _useState[0],
      setHaveAlias = _useState[1];

  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    full: true,
    theme: _themes.mnet
  }, _react["default"].createElement(_mnetUiBase.Box, {
    fill: true,
    align: "center",
    justify: "center"
  }, _react["default"].createElement(_mnetUiBase.Box, {
    width: "medium"
  }, _react["default"].createElement(_mnetUiBase.Form, {
    onReset: function onReset(event) {
      return console.log(event);
    },
    onSubmit: function onSubmit(_ref) {
      var value = _ref.value;
      return console.log('Submit', value);
    }
  }, _react["default"].createElement(_mnetUiBase.FormField, {
    label: "Name",
    name: "name",
    required: true
  }, _react["default"].createElement(_mnetUiBase.TextInput, {
    name: "name"
  })), _react["default"].createElement(_mnetUiBase.FormField, {
    name: "haveAlias"
  }, _react["default"].createElement(_mnetUiBase.CheckBox, {
    name: "haveAlias",
    label: "alias?",
    checked: haveAlias,
    onChange: function onChange() {
      return setHaveAlias(!haveAlias);
    }
  })), haveAlias && _react["default"].createElement(_mnetUiBase.FormField, {
    label: "Alias",
    name: "alias",
    required: true
  }, _react["default"].createElement(_mnetUiBase.TextInput, {
    name: "alias"
  })), _react["default"].createElement(_mnetUiBase.Box, {
    direction: "row",
    justify: "between",
    margin: {
      top: 'medium'
    }
  }, _react["default"].createElement(_mnetUiBase.Button, {
    type: "reset",
    label: "Reset"
  }), _react["default"].createElement(_mnetUiBase.Button, {
    type: "submit",
    label: "Update",
    primary: true
  }))))));
};

(0, _react2.storiesOf)('Form', module).add('Dynamic fields', function () {
  return _react["default"].createElement(Example, null);
});