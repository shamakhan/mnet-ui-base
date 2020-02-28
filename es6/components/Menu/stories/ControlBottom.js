import React from 'react';
import { storiesOf } from '@storybook/react';
import { MnetUIBase, Box, Menu } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var ControlBottom = function ControlBottom() {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
    height: "medium",
    justify: "center",
    align: "center",
    pad: "large"
  }, React.createElement(Menu, {
    dropProps: {
      align: {
        bottom: 'bottom',
        left: 'left'
      }
    },
    label: "actions",
    items: [{
      label: 'Profile',
      onClick: function onClick() {}
    }, {
      label: 'Settings',
      onClick: function onClick() {}
    }, {
      label: 'FAQ',
      onClick: function onClick() {}
    }]
  })));
};

storiesOf('Menu', module).add('Bottom Control Button', function () {
  return React.createElement(ControlBottom, null);
});