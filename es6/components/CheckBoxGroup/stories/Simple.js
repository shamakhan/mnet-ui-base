import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, CheckBoxGroup, MnetUIBase } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var Simple = function Simple() {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
    pad: "medium"
  }, React.createElement(CheckBoxGroup, {
    options: ['First', 'Second', 'Third']
  })));
};

storiesOf('CheckBoxGroup', module).add('Simple', function () {
  return React.createElement(Simple, null);
});