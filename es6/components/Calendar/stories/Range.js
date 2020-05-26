import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Calendar } from 'mnet-ui-base';

var RangeCalendar = function RangeCalendar() {
  return React.createElement(React.Fragment, null, React.createElement(Box, {
    align: "center",
    pad: "large"
  }, React.createElement(Calendar, {
    dates: [['2020-04-03', '2020-04-08']],
    range: true
  })));
};

storiesOf('Calendar', module).add('Range', function () {
  return React.createElement(RangeCalendar, null);
});