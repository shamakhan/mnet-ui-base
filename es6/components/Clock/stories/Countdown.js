import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, MnetUIBase, Clock } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var Example = function Example() {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
    align: "center",
    justify: "start",
    pad: "large"
  }, React.createElement(Clock, {
    type: "digital",
    time: "PT0H0M20S",
    run: "backward"
  })));
};

storiesOf('Clock', module).add('Countdown', function () {
  return React.createElement(Example, null);
}, {
  chromatic: {
    disable: true
  }
});