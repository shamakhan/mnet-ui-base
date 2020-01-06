import React from 'react';
import { Attraction, Car } from 'grommet-icons';

import { MnetUIBase, Anchor, Box, Button, Text } from 'mnet-ui-base';
import { mnet } from '../../../themes';

export const SimpleBox = () => (
  <MnetUIBase theme={mnet}>
    <Box
      direction="row-responsive"
      justify="center"
      align="center"
      pad="xlarge"
      background="dark-2"
      gap="medium"
    >
      <Box
        pad="large"
        align="center"
        background={{ color: 'light-2', opacity: 'strong' }}
        round
        gap="small"
      >
        <Attraction size="large" />
        <Text>Party</Text>
        <Anchor href="" label="Link" />
        <Button label="Button" onClick={() => {}} />
      </Box>
      <Box pad="large" align="center" background="dark-3" round gap="small">
        <Car size="large" color="light-2" />
        <Text>Travel</Text>
        <Anchor href="" label="Link" />
        <Button label="Button" onClick={() => {}} />
      </Box>
    </Box>
  </MnetUIBase>
);

SimpleBox.storyName = 'Simple';

export default {
  title: 'Layout/Box/Simple',
};
