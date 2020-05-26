import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, CheckBoxGroup, MnetUIBase, Text } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var Disabled = function Disabled() {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
    pad: "medium",
    gap: "large"
  }, React.createElement(Box, null, React.createElement(Text, {
    margin: {
      vertical: 'small'
    }
  }, "Disabled Group"), React.createElement(CheckBoxGroup, {
    disabled: true,
    options: ['First', 'Second', 'Third']
  })), React.createElement(Box, null, React.createElement(Text, {
    margin: {
      vertical: 'small'
    }
  }, " Disabled Individuals"), React.createElement(CheckBoxGroup, {
    options: [{
      label: 'Maui',
      disabled: true
    }, {
      label: 'Jerusalem'
    }, {
      label: 'Wuhan',
      disabled: true
    }]
  }))));
};

storiesOf('CheckBoxGroup', module).add('Disabled', function () {
  return React.createElement(Disabled, null);
});