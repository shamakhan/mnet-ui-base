import React from 'react';
import { storiesOf } from '@storybook/react';
import { MnetUIBase, Box, List, Menu } from 'mnet-ui-base';
import { More } from "grommet-icons/es6/icons/More";
import { mnet } from 'mnet-ui-base/themes';
import { data } from './data';

var ActionList = function ActionList() {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
    pad: "large"
  }, React.createElement(List, {
    data: data.slice(0, 10),
    pad: {
      left: 'small',
      right: 'none'
    },
    action: function action() {
      return React.createElement(Menu, {
        icon: React.createElement(More, null),
        hoverIndicator: true,
        items: [{
          label: 'one'
        }]
      });
    }
  })));
};

storiesOf('List', module).add('action', function () {
  return React.createElement(ActionList, null);
});