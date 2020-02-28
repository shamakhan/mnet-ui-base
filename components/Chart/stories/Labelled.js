"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LabelledChart = function LabelledChart(_ref) {
  var color = _ref.color,
      label = _ref.label,
      value = _ref.value;
  return _react["default"].createElement(_mnetUiBase.Box, {
    flex: false,
    basis: "xsmall",
    align: "center",
    gap: "small"
  }, _react["default"].createElement(_mnetUiBase.Chart, {
    bounds: [[0, 2], [0, 400]],
    type: "bar",
    values: [{
      value: [1, value]
    }],
    color: color,
    round: true,
    size: {
      height: 'medium',
      width: 'xsmall'
    }
  }), _react["default"].createElement(_mnetUiBase.Box, {
    align: "center"
  }, _react["default"].createElement(_mnetUiBase.Text, null, label), _react["default"].createElement(_mnetUiBase.Text, {
    weight: "bold"
  }, value, " TiB")));
};

var LabelledCharts = function LabelledCharts() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet
  }, _react["default"].createElement(_mnetUiBase.Box, {
    pad: "large",
    direction: "row",
    gap: "medium"
  }, _react["default"].createElement(LabelledChart, {
    label: "Exported",
    value: 300
  }), _react["default"].createElement(LabelledChart, {
    label: "Usable",
    value: 200,
    color: "accent-2"
  }), _react["default"].createElement(LabelledChart, {
    label: "Used",
    value: 98.2,
    color: "accent-3"
  })));
};

(0, _react2.storiesOf)('Chart', module).add('Labelled', function () {
  return _react["default"].createElement(LabelledCharts, null);
});