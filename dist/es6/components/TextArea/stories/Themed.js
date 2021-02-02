import React from 'react';
import { storiesOf } from '@storybook/react';
import { MnetUIBase, Box, TextArea } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';
import { deepMerge } from 'mnet-ui-base/utils';
var customTheme = deepMerge(mnet, {
  textArea: {
    extend: function extend() {
      return "\n      font-size: 40px;\n      color: red;\n    ";
    }
  }
});

var ThemedTextArea = function ThemedTextArea() {
  var _React$useState = React.useState(''),
      value = _React$useState[0],
      setValue = _React$useState[1];

  var onChange = function onChange(event) {
    return setValue(event.target.value);
  };

  return /*#__PURE__*/React.createElement(MnetUIBase, {
    theme: customTheme
  }, /*#__PURE__*/React.createElement(Box, {
    width: "large",
    height: "medium",
    border: {
      color: 'brand',
      size: 'medium'
    }
  }, /*#__PURE__*/React.createElement(TextArea, {
    value: value,
    onChange: onChange,
    fill: true
  })));
};

storiesOf('TextArea', module).add('Themed', function () {
  return /*#__PURE__*/React.createElement(ThemedTextArea, null);
});