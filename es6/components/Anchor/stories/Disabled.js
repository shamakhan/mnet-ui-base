import React from 'react';
import { storiesOf } from '@storybook/react';
import { Anchor, Box, MnetUIBase } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var Disabled = function Disabled() {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
    align: "center",
    pad: "large"
  }, React.createElement(Box, {
    margin: "small"
  }, React.createElement(Anchor, {
    disabled: true,
    label: "Disabled Anchor"
  }))));
};

storiesOf('Anchor', module).add('Disabled', function () {
  return React.createElement(Disabled, null);
});