import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, MnetUIBase, TextInput } from 'mnet-ui-base';
import { hb } from 'mnet-ui-base-theme-hb';
import { Text } from '../../Text';

var TextInputMaterial = function TextInputMaterial() {
  var _React$useState = React.useState(''),
      value = _React$useState[0],
      setValue = _React$useState[1];

  var onChange = function onChange(event) {
    return setValue(event.target.value);
  };

  return /*#__PURE__*/React.createElement(MnetUIBase, {
    full: true,
    theme: hb
  }, /*#__PURE__*/React.createElement(Box, {
    justify: "start",
    pad: "large"
  }, /*#__PURE__*/React.createElement(Box, {
    pad: "medium"
  }, /*#__PURE__*/React.createElement(Text, null, "Ad Unit Name")), /*#__PURE__*/React.createElement(Box, {
    width: "large",
    height: "40px"
  }, /*#__PURE__*/React.createElement(TextInput, {
    custom: true,
    value: value,
    plain: Boolean(value),
    onChange: onChange
  }))), /*#__PURE__*/React.createElement(Box, {
    justify: "start",
    pad: "large"
  }, /*#__PURE__*/React.createElement(Box, {
    pad: "medium"
  }, /*#__PURE__*/React.createElement(Text, null, "Div Id")), /*#__PURE__*/React.createElement(Box, {
    width: "medium",
    height: "40px"
  }, /*#__PURE__*/React.createElement(TextInput, {
    pad: "xxlarge",
    margin: "xxlarge",
    value: value,
    error: true,
    errorMessage: "Incorrect Entry",
    onChange: onChange
  }))), /*#__PURE__*/React.createElement(Box, {
    justify: "start",
    pad: "large"
  }, /*#__PURE__*/React.createElement(Box, {
    pad: "medium"
  }, /*#__PURE__*/React.createElement(Text, null, "Div Id")), /*#__PURE__*/React.createElement(Box, {
    width: "small",
    height: "40px"
  }, /*#__PURE__*/React.createElement(TextInput, {
    pad: "xxlarge",
    margin: "xxlarge",
    value: value // plain={Boolean(value)}
    ,
    error: !value,
    errorMessage: "This field is required!",
    onChange: onChange
  }))));
};

storiesOf('TextInput', module).add('TextInputMaterial', function () {
  return /*#__PURE__*/React.createElement(TextInputMaterial, null);
});