import React from 'react';
import { storiesOf } from '@storybook/react';
import { MnetUIBase, Box, Stack } from 'mnet-ui-base';

var SimpleStack = function SimpleStack() {
  return React.createElement(MnetUIBase, null, React.createElement(Stack, {
    anchor: "center"
  }, React.createElement(Box, {
    pad: "large",
    background: "neutral-1"
  }), React.createElement(Box, {
    pad: "small",
    background: "accent-1"
  })));
};

var FillStack = function FillStack() {
  return React.createElement("div", {
    style: {
      width: '100vw',
      height: '100vh',
      overflow: 'auto'
    }
  }, React.createElement(Stack, {
    fill: true
  }, React.createElement(Box, {
    background: "brand",
    fill: true
  }, "Test")));
};

storiesOf('Stack', module).add('Simple', function () {
  return React.createElement(SimpleStack, null);
}).add('Fill', function () {
  return React.createElement(FillStack, null);
});