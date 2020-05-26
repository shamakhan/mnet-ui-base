import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Clock } from 'mnet-ui-base';

var AnalogClock = function AnalogClock() {
  return React.createElement(React.Fragment, null, React.createElement(Box, {
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