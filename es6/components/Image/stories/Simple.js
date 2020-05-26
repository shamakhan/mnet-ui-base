import React from 'react';
import { storiesOf } from '@storybook/react';
import { Image } from 'mnet-ui-base';

var Simple = function Simple() {
  return React.createElement(React.Fragment, null, React.createElement(Image, {
    src: "//v2.grommet.io/assets/IMG_4245.jpg"
  }));
};

storiesOf('Image', module).add('Simple', function () {
  return React.createElement(Simple, null);
});