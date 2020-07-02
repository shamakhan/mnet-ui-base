import React from 'react';
import { Box } from '../Box';
import { Text } from '../Text';

var ValueLabelWithNumber = function ValueLabelWithNumber(_ref) {
  var value = _ref.value,
      number = _ref.number,
      color = _ref.color;
  return /*#__PURE__*/React.createElement(Box, {
    direction: "row",
    margin: {
      horizontal: 'medium'
    },
    align: "center"
  }, /*#__PURE__*/React.createElement(Text, {
    size: "medium",
    weight: 600
  }, number ? value : 'Select'), number > 0 && /*#__PURE__*/React.createElement(Box, {
    pad: "5px",
    background: color,
    round: "xsmall",
    margin: {
      horizontal: 'medium'
    }
  }, /*#__PURE__*/React.createElement(Text, {
    size: "10px",
    color: "white",
    weight: 600
  }, number)));
};

export { ValueLabelWithNumber };