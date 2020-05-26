import React from 'react';
import { storiesOf } from '@storybook/react';
import { Heading } from 'mnet-ui-base';

var Color = function Color() {
  return React.createElement(React.Fragment, null, React.createElement(Heading, {
    color: "accent-1"
  }, "Colored Heading"));
};

storiesOf('Heading', module).add('Color', function () {
  return React.createElement(Color, null);
});