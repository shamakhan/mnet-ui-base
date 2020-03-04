import React from 'react';
import { storiesOf } from '@storybook/react';
import { MnetUIBase, Box } from 'mnet-ui-base';
import { mnet } from '../../../themes';

var RTLBox = function RTLBox() {
  return React.createElement(MnetUIBase, {
    theme: mnet,
    dir: "rtl"
  }, React.createElement(Box, {
    direction: "row",
    align: "center",
    pad: "small",
    gap: "small",
    border: true
  }, React.createElement(Box, {
    direction: "row",
    align: "center",
    pad: "small",
    border: "start"
  }, "border start"), React.createElement(Box, {
    direction: "row",
    align: "center",
    pad: {
      start: 'large'
    },
    background: "brand"
  }, "pad start"), React.createElement(Box, {
    direction: "row",
    align: "center",
    margin: {
      start: 'large'
    },
    background: "brand"
  }, "margin start")));
};

storiesOf('Box', module).add('RTL', function () {
  return React.createElement(RTLBox, null);
});