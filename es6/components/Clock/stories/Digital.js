import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, MnetUIBase, Clock } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var DigitalClock = function DigitalClock() {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
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