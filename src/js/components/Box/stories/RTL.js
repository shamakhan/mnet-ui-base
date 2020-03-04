import React from 'react';

import { MnetUIBase, Box } from 'mnet-ui-base';
import { mnet } from '../../../themes';

export const RTLBox = () => (
  <MnetUIBase theme={mnet} dir="rtl">
    <Box direction="row" align="center" pad="small" gap="small" border>
      <Box direction="row" align="center" pad="small" border="start">
        border start
      </Box>
      <Box
        direction="row"
        align="center"
        pad={{ start: 'large' }}
        background="brand"
      >
        pad start
      </Box>
      <Box
        direction="row"
        align="center"
        margin={{ start: 'large' }}
        background="brand"
      >
        margin start
      </Box>
    </Box>
  </MnetUIBase>
);

RTLBox.storyName = 'RTL';

export default {
  title: 'Layout/Box/RTL',
};
