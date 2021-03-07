import React from 'react';

import { MnetUIBase, Anchor, Box } from 'mnet-ui-base';
import { Add } from 'grommet-icons';

const customTheme = {
  global: {
    colors: {
      custom: '#cc6633',
    },
  },
};

export const Theme = () => (
  <MnetUIBase theme={customTheme}>
    <Box pad="medium">
      <Anchor icon={<Add />} label="Add" color="custom" />
    </Box>
  </MnetUIBase>
);

export default {
  title: 'Utilities/MnetUIBase/Theme',
};
