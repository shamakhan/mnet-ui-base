import React from 'react';
import { storiesOf } from '@storybook/react';
import { MnetUIBase, Text } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var Color = function Color() {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Text, {
    color: "accent-1"
  }, "Colored Text"));
};

storiesOf('Text', module).add('Color', function () {
  return React.createElement(Color, null);
});