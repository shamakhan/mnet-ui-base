import React from 'react';

import { MnetUIBase, Box, DataTable, Spinner, Text } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

// Source code for the data can be found here
// https://github.com/grommet/grommet/blob/master/src/js/components/DataTable/stories/data.js
import { columns, DATA } from './data';

export const Placeholder = () => (
  <MnetUIBase theme={mnet}>
    <Box align="center" pad="large">
      <DataTable
        columns={columns}
        data={DATA}
        placeholder={
          <Box
            fill
            align="center"
            justify="center"
            direction="row"
            pad="large"
            gap="small"
            background={{ color: 'background-front', opacity: 'strong' }}
          >
            <Spinner />
            <Text weight="bold">Loading ...</Text>
          </Box>
        }
        step={10}
      />
    </Box>
  </MnetUIBase>
);

export default {
  title: 'Visualizations/DataTable/Placeholder',
};
