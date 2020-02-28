import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, MnetUIBase, Layer, Text } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var PlainLayer = function PlainLayer() {
  return React.createElement(MnetUIBase, {
    theme: mnet,
    full: true
  }, React.createElement(Box, {
    fill: true,
    background: "dark-3"
  }, React.createElement(Layer, {
    margin: "medium",
    plain: true
  }, React.createElement(Box, {
    pad: "large",
    border: {
      color: 'accent-1',
      size: 'large'
    }
  }, React.createElement(Text, {
    color: "accent-2"
  }, "Text")))));
};

storiesOf('Layer', module).add('Plain', function () {
  return React.createElement(PlainLayer, null);
});