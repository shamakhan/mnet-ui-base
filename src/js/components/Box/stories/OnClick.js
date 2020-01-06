import React from 'react';
import { Attraction } from 'grommet-icons';

import { MnetUIBase, Box, Text } from 'mnet-ui-base';
import { mnet } from '../../../themes';

export const OnClickBox = () => (
  <MnetUIBase theme={mnet}>
    <Box justify="center" align="center" pad="large">
      {/* eslint-disable no-alert */}
      <Box
        border
        pad="large"
        align="center"
        round
        gap="small"
        hoverIndicator={{
          background: {
            color: 'background-contrast',
          },
          elevation: 'medium',
        }}
        onClick={() => {
          alert('clicked');
        }}
      >
        <Attraction size="large" />
        <Text>Party</Text>
      </Box>
    </Box>
  </MnetUIBase>
);

OnClickBox.storyName = 'onClick';

export default {
  title: 'Layout/Box/onClick',
};
