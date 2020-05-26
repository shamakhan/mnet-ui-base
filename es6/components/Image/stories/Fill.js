import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Image, Anchor } from 'mnet-ui-base';

var Fill = function Fill() {
  return React.createElement(React.Fragment, null, React.createElement(Box, {
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
    src: "//v2.mnet.io/assets/IMG_4245.jpg"
  }))), React.createElement(Box, {
    height: "small",
    width: "small",
    border: true
  }, React.createElement(Anchor, {
    href: "#"
  }, React.createElement(Image, {
    fit: "contain",
    fill: true,
    src: "//v2.mnet.io/assets/IMG_4245.jpg"
  })))));
};

storiesOf('Image', module).add('Fill', function () {
  return React.createElement(Fill, null);
});