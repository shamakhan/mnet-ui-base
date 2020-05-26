import React from 'react';
import { storiesOf } from '@storybook/react';
import { Anchor, Box } from 'mnet-ui-base';

var Default = function Default() {
  return React.createElement("div", null, React.createElement(Box, {
    align: "center",
    pad: "large"
  }, React.createElement(Anchor, {
    href: "#"
  }, "Link")));
};

storiesOf('Anchor', module).add('Default', function () {
  return React.createElement(Default, null);
});