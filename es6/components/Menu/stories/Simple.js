import React from 'react';
import { storiesOf } from '@storybook/react';
import { MnetUIBase, Box, Menu } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var SimpleMenu = function SimpleMenu() {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
    align: "center",
    pad: "large"
  }, React.createElement(Menu, {
    dropProps: {
      align: {
        top: 'bottom',
        left: 'left'
      }
    },
    label: "actions",
    items: [{
      label: 'Launch',
      onClick: function onClick() {}
    }, {
      label: 'Abort',
      onClick: function onClick() {}
    }, {
      label: 'Disabled',
      disabled: true
    }]
  })));
};

storiesOf('Menu', module).add('Simple', function () {
  return React.createElement(SimpleMenu, null);
});