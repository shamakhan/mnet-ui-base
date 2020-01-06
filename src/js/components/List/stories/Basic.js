import React from 'react';

import { MnetUIBase, Box, List } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

const locations = [
  'Boise',
  'Fort Collins',
  'Los Gatos',
  'Palo Alto',
  'San Francisco',
];

export const Basic = () => (
  <MnetUIBase theme={mnet}>
    <Box align="center" pad="large">
      <List data={locations} />
    </Box>
  </MnetUIBase>
);

export default {
  title: 'Visualizations/List/Basic',
};
