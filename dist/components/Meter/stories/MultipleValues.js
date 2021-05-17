"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var MultipleValues = function MultipleValues() {
  var total = 100;

  var _useState = (0, _react.useState)(),
      active = _useState[0],
      setActive = _useState[1];

  var _useState2 = (0, _react.useState)(),
      label = _useState2[0],
      setLabel = _useState2[1];

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Stack, {
    anchor: "center"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Meter, {
    type: "circle",
    background: "light-2",
    values: [{
      value: 60,
      onHover: function onHover(over) {
        setActive(over ? 60 : 0);
        setLabel(over ? 'in use' : undefined);
      }
    }, {
      value: 30,
      onHover: function onHover(over) {
        setActive(over ? 30 : 0);
        setLabel(over ? 'available' : undefined);
      }
    }],
    max: 100,
    size: "small",
    thickness: "medium"
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    direction: "row",
    align: "center",
    pad: {
      bottom: 'xsmall'
    }
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, {
    size: "xxlarge",
    weight: "bold"
  }, active || total), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "GB")), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, label || 'total')))));
};

(0, _react2.storiesOf)('Meter', module).add('Multiple Values', function () {
  return /*#__PURE__*/_react["default"].createElement(MultipleValues, null);
});