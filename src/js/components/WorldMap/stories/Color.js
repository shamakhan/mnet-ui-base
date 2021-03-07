import React from 'react';

import { Box, MnetUIBase, WorldMap } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Color = () => (
  <MnetUIBase theme={mnet}>
    <Box align="center" pad="large">
      <WorldMap color="graph-1" />
    </Box>
  </MnetUIBase>
);

Color.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Visualizations/WorldMap/Color',
};
