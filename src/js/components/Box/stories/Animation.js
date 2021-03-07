import React from 'react';

import { MnetUIBase, Box, Grid } from 'mnet-ui-base';
import { mnet } from '../../../themes';

export const Animation = () => (
  <MnetUIBase theme={mnet}>
    <Box pad="medium">
      <Grid columns="small" gap="medium">
        {[
          'fadeIn',
          'fadeOut',
          'jiggle',
          'pulse',
          'rotateRight',
          'rotateLeft',
          'slideUp',
          'slideDown',
          'slideLeft',
          'slideRight',
          'zoomIn',
          'zoomOut',
        ].map(animation => (
          <Box
            key={animation}
            pad="large"
            background="brand"
            animation={{ type: animation, duration: 4000 }}
            align="center"
          >
            {animation}
          </Box>
        ))}
      </Grid>
    </Box>
  </MnetUIBase>
);

export default {
  title: 'Layout/Box/Animation',
};
