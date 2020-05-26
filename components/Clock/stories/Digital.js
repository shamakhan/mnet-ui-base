"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DigitalClock = function DigitalClock() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    justify: "start",
    pad: "large"
  }, _react["default"].createElement(_mnetUiBase.Clock, {
    type: "digital"
  })));
};

(0, _react2.storiesOf)('Clock', module).add('Digital', function () {
  return _react["default"].createElement(DigitalClock, null);
}, {
  chromatic: {
    disable: true
  }
});