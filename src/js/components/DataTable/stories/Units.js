import React from 'react';

import { MnetUIBase, Box, DataTable, Heading } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

const DATA = [
  {
    name: 'Boot',
    free: 24,
    size: 4,
  },
  {
    name: 'Backup',
    free: 30,
    size: 12,
  },
  {
    name: 'Application',
    free: 40,
    size: 23,
  },
];

const columns = [
  { property: 'name', header: 'Disk Name', size: 'small' },
  {
    property: 'size',
    header: 'Size',
    size: 'xsmall',
    align: 'end',
    units: '(TiB)',
  },
  {
    property: 'free',
    header: 'Free',
    size: 'xsmall',
    align: 'end',
    units: '%',
  },
];

export const UnitsDataTable = () => (
  <MnetUIBase theme={mnet}>
    <Box align="center" pad="large">
      <Heading level="3">Table with units in the heading</Heading>
      <DataTable columns={columns} data={DATA} primaryKey={false} />
    </Box>
  </MnetUIBase>
);

UnitsDataTable.storyName = 'Units';

export default {
  title: 'Visualizations/DataTable/Units',
};
