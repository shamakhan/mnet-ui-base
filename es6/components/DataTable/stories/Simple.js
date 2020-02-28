import React from 'react';
import { storiesOf } from '@storybook/react';
import { MnetUIBase, Box, DataTable } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';
import { columns, DATA } from './data';

var SimpleDataTable = function SimpleDataTable() {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
    align: "center",
    pad: "large"
  }, React.createElement(DataTable, {
    columns: columns,
    data: DATA,
    step: 10
  })));
};

storiesOf('DataTable', module).add('Simple', function () {
  return React.createElement(SimpleDataTable, null);
});