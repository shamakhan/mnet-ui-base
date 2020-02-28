import React from 'react';
import { storiesOf } from '@storybook/react';
import { MnetUIBase, Box, Text } from 'mnet-ui-base';
import { mnet } from '../../../themes';

var GradientColorBox = function GradientColorBox() {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
    justify: "center",
    align: "center",
    pad: "xlarge",
    background: "linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)",
    round: "large"
  }, React.createElement(Text, {
    color: "white"
  }, "I have a linear gradient background")));
};

storiesOf('Box', module).add('Gradient', function () {
  return React.createElement(GradientColorBox, null);
});