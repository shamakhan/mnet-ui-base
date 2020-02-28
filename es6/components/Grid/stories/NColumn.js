import React from 'react';
import { storiesOf } from '@storybook/react';
import { MnetUIBase, Box, Grid } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var NColumnGrid = function NColumnGrid() {
  return React.createElement(MnetUIBase, {
    theme: mnet,
    full: true
  }, React.createElement(Grid, {
    columns: {
      count: 6,
      size: 'auto'
    },
    gap: "small"
  }, React.createElement(Box, {
    background: "brand"
  }, "Item 1"), React.createElement(Box, {
    background: "brand"
  }, "Item 2"), React.createElement(Box, {
    background: "brand"
  }, "Item 3"), React.createElement(Box, {
    background: "brand"
  }, "Item 4"), React.createElement(Box, {
    background: "brand"
  }, "Item 5"), React.createElement(Box, {
    background: "brand"
  }, "Item 6")));
};

storiesOf('Grid', module).add('N-column layout', function () {
  return React.createElement(NColumnGrid, null);
});