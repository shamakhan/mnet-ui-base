import React from 'react';

import { Box, MnetUIBase, WorldMap } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Simple = () => (
  <MnetUIBase theme={mnet}>
    <Box align="center" pad="large">
      <WorldMap />
    </Box>
  </MnetUIBase>
);

Simple.parameters = {
  // chromatic disabled because snapshot is the same as SelectPlace
  chromatic: { disable: true },
};

export default {
  title: 'Visualizations/WorldMap/Simple',
};
