import React from 'react';
import { storiesOf } from '@storybook/react';
import { MnetUIBase, Box, RadioButton } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var DisabledRadioButton = function DisabledRadioButton() {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
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