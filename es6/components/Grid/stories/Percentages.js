import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Grid } from 'mnet-ui-base';

var Percentages = function Percentages() {
  return React.createElement("div", {
    style: {
      width: '100vw',
      height: '100vh',
      overflow: 'auto'
    }
  }, React.createElement(Grid, {
    fill: true,
    areas: [{
      name: 'nav',
      start: [0, 0],
      end: [0, 0]
    }, {
      name: 'main',
      start: [1, 0],
      end: [1, 0]
    }],
    columns: ['small', 'flex'],
    rows: ['flex'],
    gap: "small"
  }, React.createElement(Box, {
    gridArea: "nav",
    background: "brand"
  }), React.createElement(Box, {
    gridArea: "main",
    background: "brand"
  })));
};

storiesOf('Grid', module).add('Percentages', function () {
  return React.createElement(Percentages, null);
});