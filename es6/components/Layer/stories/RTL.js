import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, MnetUIBase, Layer } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var RTLLayer = function RTLLayer() {
  return React.createElement(MnetUIBase, {
    theme: mnet,
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