import React from 'react';
import { storiesOf } from '@storybook/react';
import { MnetUIBase, Box, Meter, Stack, Text } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var LabelledMeter = function LabelledMeter() {
  var meterValue = 30;
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
    align: "center",
    pad: "large"
  }, React.createElement(Stack, {
    anchor: "center"
  }, React.createElement(Meter, {
    type: "circle",
    background: "light-2",
    values: [{
      value: meterValue
    }],
    size: "xsmall",
    thickness: "small"
  }), React.createElement(Box, {
    direction: "row",
    align: "center",
    pad: {
      bottom: 'xsmall'
    }
  }, React.createElement(Text, {
    size: "xlarge",
    weight: "bold"
  }, meterValue), React.createElement(Text, {
    size: "small"
  }, "%")))));
};

storiesOf('Meter', module).add('Labelled', function () {
  return React.createElement(LabelledMeter, null);
});