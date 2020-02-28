import React from 'react';
import { storiesOf } from '@storybook/react';
import { MnetUIBase, Box, Image } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var Fit = function Fit() {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
    align: "start",
    gap: "medium"
  }, React.createElement(Box, {
    height: "small",
    width: "small",
    border: true
  }, React.createElement(Image, {
    src: "//v2.grommet.io/assets/IMG_4245.jpg",
    fit: "contain"
  })), React.createElement(Box, {
    height: "small",
    width: "small",
    border: true
  }, React.createElement(Image, {
    src: "//v2.grommet.io/assets/IMG_4245.jpg",
    fit: "cover"
  }))));
};

storiesOf('Image', module).add('Fit', function () {
  return React.createElement(Fit, null);
});