import React from 'react';

import { Box, Layer } from 'mnet-ui-base';

export const RTLLayer = () => (
  <div dir="rtl">
    <Layer
      position="start"
      margin={{ vertical: 'small', start: 'xlarge', end: 'medium' }}
    >
      <Box height="small" overflow="auto">
        <Box pad="xlarge">text</Box>
        <Box pad="xlarge">text</Box>
        <Box pad="xlarge">text</Box>
        <Box pad="xlarge">text</Box>
        <Box pad="xlarge">text</Box>
        <Box pad="xlarge">text</Box>
      </Box>
    </Layer>
  </div>
);

RTLLayer.storyName = 'RTL';

export default {
  title: 'Layout/Layer/RTL',
};
