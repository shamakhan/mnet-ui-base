import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Layer, Text } from 'mnet-ui-base';

var PlainLayer = function PlainLayer() {
  return React.createElement("div", {
    style: {
      width: '100vw',
      height: '100vh',
      overflow: 'auto'
    }
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