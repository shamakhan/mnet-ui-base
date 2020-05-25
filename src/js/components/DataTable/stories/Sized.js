import React from 'react';

import { Box, DataTable } from 'mnet-ui-base';

// Source code for the data can be found here
// https://github.com/grommet/grommet/blob/master/src/js/components/DataTable/stories/data.js
import { columns, data } from './data';

export const SizedDataTable = () => (
  <>
    <Box align="center" pad="large">
      <DataTable columns={columns} data={data} size="medium" />
    </Box>
  </>
);

SizedDataTable.storyName = 'Sized';

export default {
  title: 'Visualizations/DataTable/Sized',
};
