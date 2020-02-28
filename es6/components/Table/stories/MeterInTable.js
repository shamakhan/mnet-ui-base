/* eslint-disable react/no-array-index-key */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, MnetUIBase, Meter, Table, TableBody, TableCell, TableRow, Text } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';
var values = [20, 40, 60, 80, 100];

var MeterInTable = function MeterInTable() {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
    align: "center",
    pad: "large"
  }, React.createElement(Box, {
    border: true,
    pad: {
      top: 'xsmall'
    }
  }, React.createElement(Table, {
    caption: "Meter Inside Table"
  }, React.createElement(TableBody, null, values.map(function (val, index) {
    return React.createElement(TableRow, {
      key: index
    }, React.createElement(TableCell, null, React.createElement(Meter, {
      type: "bar",
      values: [{
        value: val
      }]
    })), React.createElement(TableCell, null, React.createElement(Text, null, val, "% complete")));
  }))))));
};

storiesOf('Table', module).add('Meter Inside Table', function () {
  return React.createElement(MeterInTable, null);
});