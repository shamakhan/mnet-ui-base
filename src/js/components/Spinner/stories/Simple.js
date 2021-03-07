import React from 'react';

import { mnet, Box, MnetUIBase, Spinner, Text } from 'mnet-ui-base';

export const Simple = () => (
  <MnetUIBase theme={mnet} full>
    <Box align="center" direction="row" gap="small" pad="small">
      <Spinner />
      <Text>Loading...</Text>
    </Box>
  </MnetUIBase>
);

export default {
  title: 'Visualizations/Spinner/Simple',
};
