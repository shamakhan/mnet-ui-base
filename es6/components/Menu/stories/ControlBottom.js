import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Menu } from 'mnet-ui-base';

var ControlBottom = function ControlBottom() {
  return React.createElement("div", null, React.createElement(Box, {
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