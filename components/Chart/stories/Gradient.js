"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var gradient = [{
  value: 0,
  color: 'status-ok'
}, {
  value: 25,
  color: 'status-ok'
}, {
  value: 27,
  color: 'status-warning'
}, {
  value: 30,
  color: 'status-critical'
}];

var GradientCharts = function GradientCharts() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet
  }, _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large",
    gap: "medium"
  }, _react["default"].createElement(_mnetUiBase.Chart, {
    id: "bar",
    type: "bar",
    color: gradient,
    values: [[10, 20], [20, 30], [30, 15]]
  }), _react["default"].createElement(_mnetUiBase.Chart, {
    id: "line",
    type: "line",
    color: gradient,
    values: [20, 30, 15]
  }), _react["default"].createElement(_mnetUiBase.Chart, {
    id: "area",
    type: "area",
    color: gradient,
    values: [{
      value: [10, 20]
    }, {
      value: [20, 30]
    }, {
      value: [30, 15]
    }]
  }), _react["default"].createElement(_mnetUiBase.Chart, {
    id: "point",
    type: "point",
    color: gradient,
    values: [[10, 20], [20, 30], [30, 15]],
    round: true
  })));
};

(0, _react2.storiesOf)('Chart', module).add('Gradient', function () {
  return _react["default"].createElement(GradientCharts, null);
});