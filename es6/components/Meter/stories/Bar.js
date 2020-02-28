import React from 'react';
import { storiesOf } from '@storybook/react';
import { MnetUIBase, Box, Meter } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var BarMeter = function BarMeter() {
  var value = 30;
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
    align: "center",
    pad: "large"
  }, React.createElement(Meter, {
    type: "bar",
    background: "light-2",
    values: [{
      value: value
    }]
  })));
};

storiesOf('Meter', module).add('Bar', function () {
  return React.createElement(BarMeter, null);
});