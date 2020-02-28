import React from 'react';
import { storiesOf } from '@storybook/react';
import { Anchor, Box, MnetUIBase } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var Default = function Default() {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
    align: "center",
    pad: "large"
  }, React.createElement(Anchor, {
    href: "#"
  }, "Link")));
};

storiesOf('Anchor', module).add('Default', function () {
  return React.createElement(Default, null);
});