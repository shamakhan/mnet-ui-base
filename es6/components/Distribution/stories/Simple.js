import React from 'react';
import { storiesOf } from '@storybook/react';
import { MnetUIBase, Box, Distribution, Text } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var SimpleDistribution = function SimpleDistribution() {
  return React.createElement(MnetUIBase, {
    theme: mnet,
    full: true
  }, React.createElement(Distribution, {
    fill: true,
    values: [{
      value: 50,
      color: 'light-3'
    }, {
      value: 30,
      color: 'neutral-1'
    }, {
      value: 20,
      color: 'brand'
    }, {
      value: 10,
      color: 'light-3'
    }, {
      value: 5,
      color: 'neutral-1'
    }]
  }, function (value) {
    return React.createElement(Box, {
      pad: "xsmall",
      background: value.color,
      fill: true
    }, React.createElement(Text, {
      size: "large"
    }, value.value));
  }));
};

storiesOf('Distribution', module).add('Simple', function () {
  return React.createElement(SimpleDistribution, null);
});