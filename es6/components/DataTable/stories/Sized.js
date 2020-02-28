import React from 'react';
import { storiesOf } from '@storybook/react';
import { MnetUIBase, Box, DataTable } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';
import { columns, data } from './data';

var SizedDataTable = function SizedDataTable() {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
    align: "center",
    pad: "large"
  }, React.createElement(DataTable, {
    columns: columns,
    data: data,
    size: "medium"
  })));
};

storiesOf('DataTable', module).add('Sized', function () {
  return React.createElement(SizedDataTable, null);
});