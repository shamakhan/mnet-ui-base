import React from 'react';
import { storiesOf } from '@storybook/react';
import { Anchor, Box, MnetUIBase } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var Size = function Size() {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
    align: "center",
    pad: "large"
  }, ['xxlarge', 'xlarge', 'large', 'medium', 'small', 'xsmall'].map(function (size) {
    return React.createElement(Box, {
      key: size,
      margin: "small"
    }, React.createElement(Anchor, {
      size: size,
      label: size,
      href: "#"
    }));
  })));
};

storiesOf('Anchor', module).add('Size', function () {
  return React.createElement(Size, null);
});