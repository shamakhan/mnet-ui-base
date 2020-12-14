"use strict";

exports.__esModule = true;
exports.ValueLabelWithNumber = void 0;

var _react = _interopRequireDefault(require("react"));

var _Box = require("../Box");

var _Text = require("../Text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ValueLabelWithNumber = function ValueLabelWithNumber(_ref) {
  var value = _ref.value,
      number = _ref.number,
      color = _ref.color;
  return /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    direction: "row",
    margin: {
      horizontal: 'medium'
    },
    align: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Text.Text, {
    "aria-label": "Selected Label Value",
    size: "medium",
    weight: 600
  }, number ? value : 'Select'), number > 0 && /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    pad: "5px",
    background: color,
    round: "xsmall",
    margin: {
      horizontal: 'medium'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Text.Text, {
    "aria-label": "Selected Label Count",
    size: "10px",
    color: "white",
    weight: 600
  }, number)));
};

exports.ValueLabelWithNumber = ValueLabelWithNumber;