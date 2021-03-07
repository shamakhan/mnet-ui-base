import React from 'react';

import { mnet, Box, MnetUIBase, Spinner, Text } from 'mnet-ui-base';

export const Size = () => (
  <MnetUIBase theme={mnet} full>
    {['xsmall', 'small', 'medium', 'large', 'xlarge'].map(size => (
      <Box align="center" direction="row" gap="small" pad="small" key={size}>
        <Spinner size={size} />
        <Text size={size}>{size}</Text>
      </Box>
    ))}
  </MnetUIBase>
);

export default {
  title: 'Visualizations/Spinner/Size',
};
