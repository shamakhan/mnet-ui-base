"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Example = function Example() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    full: true,
    theme: _themes.mnet
  }, _react["default"].createElement(_mnetUiBase.Box, {
    fill: true,
    align: "center",
    justify: "start",
    pad: "large"
  }, _react["default"].createElement(_mnetUiBase.Select, {
    id: "select",
    name: "select",
    placeholder: "Select",
    options: ['one', 'two'],
    onChange: function onChange(_ref) {
      var option = _ref.option;
      return console.log(option);
    }
  })));
};

(0, _react2.storiesOf)('Select', module).add('Uncontrolled', function () {
  return _react["default"].createElement(Example, null);
});