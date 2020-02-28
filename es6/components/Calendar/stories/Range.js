import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Calendar, MnetUIBase } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var RangeCalendar = function RangeCalendar() {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
    align: "center",
    pad: "large"
  }, React.createElement(Calendar, {
    range: true
  })));
};

storiesOf('Calendar', module).add('Range', function () {
  return React.createElement(RangeCalendar, null);
});