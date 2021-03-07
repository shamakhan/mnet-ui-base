import React from 'react';

import { MnetUIBase, Box, Stack } from 'mnet-ui-base';

export const Simple = () => (
  <MnetUIBase>
    <Stack anchor="center">
      <Box pad="large" background="neutral-1" />
      <Box pad="small" background="accent-1" />
    </Stack>
  </MnetUIBase>
);

export default {
  title: 'Layout/Stack/Simple',
};
