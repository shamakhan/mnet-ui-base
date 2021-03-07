import React from 'react';

import { mnet, Box, MnetUIBase, Spinner, Text } from 'mnet-ui-base';

export const Border = () => (
  <MnetUIBase theme={mnet} full>
    <Box gap="large" pad="medium">
      <Box align="center" direction="row" gap="small">
        <Spinner
          border={[
            { side: 'all', color: 'transparent', size: 'medium' },
            { side: 'horizontal', color: 'brand', size: 'medium' },
          ]}
        />
        <Text>Loading...</Text>
      </Box>
      <Box align="center" direction="row" gap="small">
        <Spinner
          border={[
            {
              side: 'all',
              color: 'brand',
              size: 'medium',
              style: 'dotted',
            },
          ]}
        />
        <Text>Loading...</Text>
      </Box>
      <Box align="center" direction="row" gap="medium">
        <Spinner
          border={[
            {
              side: 'horizontal',
              color: 'brand',
              size: 'large',
              style: 'inset',
            },
          ]}
        />
        <Text>Loading...</Text>
      </Box>
      <Box align="center" direction="row" gap="small">
        <Spinner
          border={[
            {
              side: 'all',
              color: 'brand',
              size: 'large',
              style: 'groove',
            },
          ]}
        />
        <Text>Loading...</Text>
      </Box>
      <Box align="center" direction="row" gap="small">
        <Spinner
          border={[
            { side: 'all', color: 'background-contrast', size: 'medium' },
            { side: 'right', color: 'brand', size: 'medium' },
            { side: 'top', color: 'brand', size: 'medium' },
            { side: 'left', color: 'brand', size: 'medium' },
          ]}
        />
        <Text>Loading...</Text>
      </Box>
      <Box align="center" direction="row" gap="small">
        <Spinner
          border={[{ side: 'horizontal', color: 'brand', size: 'medium' }]}
        />
        <Text>Loading...</Text>
      </Box>
    </Box>
  </MnetUIBase>
);

export default {
  title: 'Visualizations/Spinner/Border',
};
