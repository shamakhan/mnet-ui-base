import React from 'react';
import { storiesOf } from '@storybook/react';
import { MnetUIBase, Box, Image, Anchor } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var Fill = function Fill() {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
    align: "start",
    gap: "small"
  }, React.createElement(Box, {
    height: "small",
    width: "small",
    border: true
  }, React.createElement(Anchor, {
    href: "#"
  }, React.createElement(Image, {
    fit: "cover",
    fill: true,
    src: "//v2.grommet.io/assets/IMG_4245.jpg"
  }))), React.createElement(Box, {
    height: "small",
    width: "small",
    border: true
  }, React.createElement(Anchor, {
    href: "#"
  }, React.createElement(Image, {
    fit: "contain",
    fill: true,
    src: "//v2.grommet.io/assets/IMG_4245.jpg"
  })))));
};

storiesOf('Image', module).add('Fill', function () {
  return React.createElement(Fill, null);
});