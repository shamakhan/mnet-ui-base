import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Image } from 'mnet-ui-base';

var Fit = function Fit() {
  return React.createElement(React.Fragment, null, React.createElement(Box, {
    align: "start",
    gap: "medium"
  }, React.createElement(Box, {
    height: "small",
    width: "small",
    border: true
  }, React.createElement(Image, {
    src: "//v2.mnet.io/assets/IMG_4245.jpg",
    fit: "contain"
  })), React.createElement(Box, {
    height: "small",
    width: "small",
    border: true
  }, React.createElement(Image, {
    src: "//v2.mnet.io/assets/IMG_4245.jpg",
    fit: "cover"
  }))));
};

storiesOf('Image', module).add('Fit', function () {
  return React.createElement(Fit, null);
});