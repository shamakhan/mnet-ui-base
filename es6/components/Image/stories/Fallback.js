import React from 'react';
import { storiesOf } from '@storybook/react';
import { MnetUIBase, Image } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var Fallback = function Fallback() {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Image, {
    fallback: "//v2.grommet.io/assets/IMG_4245.jpg",
    src: "//v2.grommet.io/assets/IMG_4245_not_exists.jpg"
  }));
};

storiesOf('Image', module).add('Fallback', function () {
  return React.createElement(Fallback, null);
});