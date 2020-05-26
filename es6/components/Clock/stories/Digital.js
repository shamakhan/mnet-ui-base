import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Clock } from 'mnet-ui-base';

var DigitalClock = function DigitalClock() {
  return React.createElement(React.Fragment, null, React.createElement(Box, {
    align: "center",
    justify: "start",
    pad: "large"
  }, React.createElement(Clock, {
    type: "digital"
  })));
};

storiesOf('Clock', module).add('Digital', function () {
  return React.createElement(DigitalClock, null);
}, {
  chromatic: {
    disable: true
  }
});