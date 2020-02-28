import React from 'react';
import { storiesOf } from '@storybook/react';
import { MnetUIBase, Box, DataTable } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';
import { columns, DATA } from './data';

var ClickableDataTable = function ClickableDataTable() {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
    align: "center",
    pad: "large"
  }, React.createElement(DataTable, {
    columns: columns,
    data: DATA,
    step: 10,
    onClickRow: function onClickRow(event) {
      return alert(JSON.stringify(event.datum, null, 2));
    }
  })));
};

storiesOf('DataTable', module).add('Clickable', function () {
  return React.createElement(ClickableDataTable, null);
});