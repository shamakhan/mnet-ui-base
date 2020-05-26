import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, RangeInput } from 'mnet-ui-base';

var SimpleRangeInput = function SimpleRangeInput() {
  var _React$useState = React.useState(5),
      value = _React$useState[0],
      setValue = _React$useState[1];

  var onChange = function onChange(event) {
    return setValue(event.target.value);
  };

  return React.createElement(React.Fragment, null, React.createElement(Box, {
    align: "center",
    pad: "large"
  }, React.createElement(RangeInput, {
    value: value,
    onChange: onChange
  })));
};

storiesOf('RangeInput', module).add('Simple', function () {
  return React.createElement(SimpleRangeInput, null);
});