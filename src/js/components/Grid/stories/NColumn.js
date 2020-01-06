import React from 'react';

import { MnetUIBase, Box, Grid } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const NColumnGrid = () => (
  <MnetUIBase theme={mnet} full>
    <Grid
      columns={{
        count: 6,
        size: 'auto',
      }}
      gap="small"
    >
      <Box background="brand">Item 1</Box>
      <Box background="brand">Item 2</Box>
      <Box background="brand">Item 3</Box>
      <Box background="brand">Item 4</Box>
      <Box background="brand">Item 5</Box>
      <Box background="brand">Item 6</Box>
    </Grid>
  </MnetUIBase>
);

NColumnGrid.storyName = 'N-column layout';

export default {
  title: 'Layout/Grid/N-column layout',
};
