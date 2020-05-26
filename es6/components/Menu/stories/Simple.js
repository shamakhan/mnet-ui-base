import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Menu } from 'mnet-ui-base';

var SimpleMenu = function SimpleMenu() {
  return React.createElement(React.Fragment, null, React.createElement(Box, {
    align: "center",
    pad: "large"
  }, React.createElement(Menu, {
    dropProps: {
      align: {
        top: 'bottom',
        left: 'left'
      },
      elevation: 'xlarge'
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