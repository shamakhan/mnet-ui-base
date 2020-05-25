import React from 'react';

import { Box, List } from 'mnet-ui-base';

const locations = [
  'Boise',
  'Fort Collins',
  'Los Gatos',
  'Palo Alto',
  'San Francisco',
];

export const Basic = () => (
  <>
    <Box align="center" pad="large">
      <List data={locations} />
    </Box>
  </>
);

export default {
  title: 'Visualizations/List/Basic',
};
