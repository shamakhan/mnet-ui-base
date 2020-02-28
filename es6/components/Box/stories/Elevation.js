import React from 'react';
import { storiesOf } from '@storybook/react';
import { MnetUIBase, Box, Text } from 'mnet-ui-base';
import { mnet } from '../../../themes';

var ElevationBox = function ElevationBox() {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
    pad: "small",
    align: "start"
  }, React.createElement(Box, {
    pad: "medium",
    background: "dark-1",
    elevation: "medium",
    gap: "medium"
  }, React.createElement(Text, null, "dark on white"), React.createElement(Box, {
    pad: "medium",
    elevation: "medium",
    gap: "medium"
  }, React.createElement(Text, null, "dark on dark"), React.createElement(Box, {
    pad: "medium",
    background: "light-1",
    elevation: "medium",
    gap: "medium"
  }, React.createElement(Text, null, "light on dark"), React.createElement(Box, {
    pad: "medium",
    elevation: "medium"
  }, React.createElement(Text, null, "light on light")))))));
};

storiesOf('Box', module).add('Elevation', function () {
  return React.createElement(ElevationBox, null);
});