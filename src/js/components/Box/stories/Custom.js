import React from 'react';

import { MnetUIBase, Box, Text } from 'mnet-ui-base';
import { mnet } from '../../../themes';

export const GradientColorBox = () => (
  <MnetUIBase theme={mnet}>
    <Box
      justify="center"
      align="center"
      pad="xlarge"
      background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)"
      round="large"
    >
      <Text color="white">I have a linear gradient background</Text>
    </Box>
  </MnetUIBase>
);

GradientColorBox.storyName = 'Gradient';

export default {
  title: 'Layout/Box/Gradient',
};
