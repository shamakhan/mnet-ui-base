import React from 'react';
import { CircleInformation } from 'grommet-icons/icons/CircleInformation';
import { Alert } from 'grommet-icons/icons/Alert';
import { Box } from '../Box'; // import { Text } from '../Text';

import { LabelText } from './StyledMultiSelect';

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

  return /*#__PURE__*/React.createElement(Box, {
    direction: "row",
    align: "center",
    pad: {
      left: 'xlarge'
    }
  }, withInclusionExclusion && isExcluded && /*#__PURE__*/React.createElement(Box, {
    width: {
      min: '20px'
    },
    alignSelf: "start",
    pad: {
      vertical: 'small'
    }
  }, /*#__PURE__*/React.createElement(CircleInformation, {
    color: "status-error",
    size: "small"
  })), withInclusionExclusion && isExcluded === false && /*#__PURE__*/React.createElement(Box, {
    width: {
      min: '20px'
    },
    alignSelf: "start",
    pad: {
      vertical: 'small'
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    color: "status-ok",
    size: "small"
  })), /*#__PURE__*/React.createElement(LabelText, {
    "aria-label": "Selected Label Value",
    color: getColor(),
    size: size
  }, number ? value.join(', ') : 'Select'));
};

export { ValueLabelWithIcon };