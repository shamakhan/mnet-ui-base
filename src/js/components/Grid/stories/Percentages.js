import React from 'react';

import { MnetUIBase, Box, Grid } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Percentages = () => (
  <MnetUIBase theme={mnet} full>
    <Grid
      fill
      areas={[
        { name: 'nav', start: [0, 0], end: [0, 0] },
        { name: 'main', start: [1, 0], end: [1, 0] },
      ]}
      columns={['small', 'flex']}
      rows={['flex']}
      gap="small"
    >
      <Box gridArea="nav" background="brand" />
      <Box gridArea="main" background="brand" />
    </Grid>
  </MnetUIBase>
);

export default {
  title: 'Layout/Grid/Percentages',
};
