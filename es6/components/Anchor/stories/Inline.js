import React from 'react';
import { storiesOf } from '@storybook/react';
import { Anchor, Box, MnetUIBase, Paragraph } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var Inline = function Inline() {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
    align: "center",
    pad: "large"
  }, React.createElement(Paragraph, null, "This is ", React.createElement(Anchor, {
    label: "an inline link",
    href: "#"
  }), " with surrounding text.")));
};

storiesOf('Anchor', module).add('Inline', function () {
  return React.createElement(Inline, null);
});