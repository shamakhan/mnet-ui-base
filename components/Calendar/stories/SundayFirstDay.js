"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// When the first day of the month is Sunday, and the request of firstDayOfWeek
// is Monday, we are verifing we are not missing a week, issue 3253.
var SundayFirstDay = function SundayFirstDay() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet
  }, _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, _react["default"].createElement(_mnetUiBase.Calendar, {
    firstDayOfWeek: 1,
    date: new Date(2019, 8, 2).toISOString()
  })));
};

(0, _react2.storiesOf)('Calendar', module).add('1st on Sunday', function () {
  return _react["default"].createElement(SundayFirstDay, null);
});