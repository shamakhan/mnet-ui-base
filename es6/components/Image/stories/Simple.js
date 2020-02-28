import React from 'react';
import { storiesOf } from '@storybook/react';
import { MnetUIBase, Image } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var Simple = function Simple() {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Image, {
    src: "//v2.grommet.io/assets/IMG_4245.jpg"
  }));
};

storiesOf('Image', module).add('Simple', function () {
  return React.createElement(Simple, null);
});