import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Grid } from 'mnet-ui-base';

var GridAreasAlternative = function GridAreasAlternative() {
  return React.createElement("div", {
    style: {
      width: '100vw',
      height: '100vh',
      overflow: 'auto'
    }
  }, React.createElement(Grid, {
    rows: ['xxsmall', 'medium', 'xsmall'],
    columns: ['1/4', '3/4'],
    areas: [['header', 'header'], ['sidebar', 'main'], ['footer', 'footer']],
    gap: "small"
  }, React.createElement(Box, {
    background: "brand",
    gridArea: "header"
  }, "Header"), React.createElement(Box, {
    background: "light-5",
    gridArea: "sidebar"
  }, "Sidebar"), React.createElement(Box, {
    background: "light-2",
    gridArea: "main"
  }, "Main"), React.createElement(Box, {
    background: "dark-2",
    gridArea: "footer"
  }, "Footer")));
};

storiesOf('Grid', module).add('Areas prop alternative', function () {
  return React.createElement(GridAreasAlternative, null);
});