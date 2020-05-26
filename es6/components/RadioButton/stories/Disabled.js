import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, RadioButton } from 'mnet-ui-base';

var DisabledRadioButton = function DisabledRadioButton() {
  return React.createElement(React.Fragment, null, React.createElement(Box, {
    align: "center",
    pad: "large",
    gap: "large"
  }, React.createElement(RadioButton, {
    label: "option 1",
    name: "name",
    value: "option 1",
    checked: true,
    disabled: true
  })));
};

storiesOf('RadioButton', module).add('Disabled', function () {
  return React.createElement(DisabledRadioButton, null);
});