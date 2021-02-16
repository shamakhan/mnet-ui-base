import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, DataTable } from 'mnet-ui-base'; // Source code for the data can be found here
// https://github.com/grommet/grommet/blob/master/src/js/components/DataTable/stories/data.js

import { columns, data } from './data';

var SizedDataTable = function SizedDataTable() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: columns,
    data: data,
    size: "medium"
  })));
};

storiesOf('DataTable', module).add('Sized', function () {
  return /*#__PURE__*/React.createElement(SizedDataTable, null);
});