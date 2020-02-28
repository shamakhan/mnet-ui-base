import React from 'react';
import { storiesOf } from '@storybook/react';
import { MnetUIBase, Header, Main, Text } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var Simple = function Simple() {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Header, {
    background: "light-4",
    pad: "small"
  }, React.createElement(Text, {
    size: "small"
  }, "Header")), React.createElement(Main, {
    pad: "small"
  }, "I am Main! Main is a good place to place your content."));
};

storiesOf('Main', module).add('Simple', function () {
  return React.createElement(Simple, null);
});