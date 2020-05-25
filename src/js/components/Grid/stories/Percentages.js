import React from 'react';

import { Box, Grid } from 'mnet-ui-base';

export const Percentages = () => (
  <div style={{ width: '100vw', height: '100vh', overflow: 'auto' }}>
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
  </div>
);

export default {
  title: 'Layout/Grid/Percentages',
};
