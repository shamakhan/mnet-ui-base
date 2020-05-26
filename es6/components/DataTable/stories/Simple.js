import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, DataTable } from 'mnet-ui-base'; // Source code for the data can be found here
// https://github.com/grommet/grommet/blob/master/src/js/components/DataTable/stories/data.js

import { columns, DATA } from './data';

var SimpleDataTable = function SimpleDataTable() {
  return React.createElement(React.Fragment, null, React.createElement(Box, {
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