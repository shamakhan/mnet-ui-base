"use strict";

exports.__esModule = true;
exports.ValueLabelWithIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _CircleInformation = require("grommet-icons/icons/CircleInformation");

var _Alert = require("grommet-icons/icons/Alert");

var _Box = require("../Box");

var _StyledMultiSelect = require("./StyledMultiSelect");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import { Text } from '../Text';
var ValueLabelWithIcon = function ValueLabelWithIcon(_ref) {
  var withInclusionExclusion = _ref.withInclusionExclusion,
      isExcluded = _ref.isExcluded,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? [] : _ref$value,
      size = _ref.size;
  var number = value.length;

  var getColor = function getColor() {
    if (withInclusionExclusion && isExcluded) return 'status-error';
    if (withInclusionExclusion && isExcluded === false) return 'status-ok';
    return 'dark-1';
  };

  return /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    direction: "row",
    align: "center"
  }, withInclusionExclusion && isExcluded && /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    width: {
      min: '20px'
    },
    alignSelf: "start",
    pad: {
      vertical: 'small'
    }
  }, /*#__PURE__*/_react["default"].createElement(_CircleInformation.CircleInformation, {
    color: "status-error",
    size: "small"
  })), withInclusionExclusion && isExcluded === false && /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    width: {
      min: '20px'
    },
    alignSelf: "start",
    pad: {
      vertical: 'small'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Alert.Alert, {
    color: "status-ok",
    size: "small"
  })), /*#__PURE__*/_react["default"].createElement(_StyledMultiSelect.LabelText, {
    "aria-label": "Selected Label Value",
    color: getColor(),
    size: size
  }, number ? value.join(', ') : 'Select'));
};

exports.ValueLabelWithIcon = ValueLabelWithIcon;