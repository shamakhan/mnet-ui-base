import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, MnetUIBase, Clock } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var AnalogClock = function AnalogClock() {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
    align: "center",
    justify: "start",
    pad: "large"
  }, React.createElement(Clock, {
    type: "analog"
  })));
};

storiesOf('Clock', module).add('Analog', function () {
  return React.createElement(AnalogClock, null);
}, {
  chromatic: {
    disable: true
  }
});