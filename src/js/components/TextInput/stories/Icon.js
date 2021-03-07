import React from 'react';

import { Search } from 'grommet-icons';
import { Box, MnetUIBase, TextInput } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Icon = () => (
  <MnetUIBase full theme={mnet}>
    <Box fill align="center" justify="start" pad="large">
      <Box width="medium" gap="medium">
        <TextInput icon={<Search />} placeholder="search ..." />
        <TextInput icon={<Search />} reverse placeholder="search ..." />
      </Box>
    </Box>
  </MnetUIBase>
);

export default {
  title: 'Input/TextInput/Icon',
};
