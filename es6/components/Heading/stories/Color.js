import React from 'react';
import { storiesOf } from '@storybook/react';
import { MnetUIBase, Heading } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var Color = function Color() {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Heading, {
    color: "accent-1"
  }, "Colored Heading"));
};

storiesOf('Heading', module).add('Color', function () {
  return React.createElement(Color, null);
});