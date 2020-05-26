import React from 'react';
import { storiesOf } from '@storybook/react';
import { Anchor, Box } from 'mnet-ui-base';

var Disabled = function Disabled() {
  return React.createElement("div", null, React.createElement(Box, {
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