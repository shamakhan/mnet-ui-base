import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Layer } from 'mnet-ui-base';

var RTLLayer = function RTLLayer() {
  return React.createElement("div", {
    dir: "rtl"
  }, React.createElement(Layer, {
    position: "start",
    margin: {
      vertical: 'small',
      start: 'xlarge',
      end: 'medium'
    }
  }, React.createElement(Box, {
    height: "small",
    overflow: "auto"
  }, React.createElement(Box, {
    pad: "xlarge"
  }, "text"), React.createElement(Box, {
    pad: "xlarge"
  }, "text"), React.createElement(Box, {
    pad: "xlarge"
  }, "text"), React.createElement(Box, {
    pad: "xlarge"
  }, "text"), React.createElement(Box, {
    pad: "xlarge"
  }, "text"), React.createElement(Box, {
    pad: "xlarge"
  }, "text"))));
};

storiesOf('Layer', module).add('RTL', function () {
  return React.createElement(RTLLayer, null);
});