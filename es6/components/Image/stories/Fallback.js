import React from 'react';
import { storiesOf } from '@storybook/react';
import { Image } from 'mnet-ui-base';

var Fallback = function Fallback() {
  return React.createElement(React.Fragment, null, React.createElement(Image, {
    fallback: "//v2.mnet.io/assets/IMG_4245.jpg",
    src: "//v2.mnet.io/assets/IMG_4245_not_exists.jpg"
  }));
};

storiesOf('Image', module).add('Fallback', function () {
  return React.createElement(Fallback, null);
});