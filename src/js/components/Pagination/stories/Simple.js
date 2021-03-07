import React from 'react';

import { Box, MnetUIBase, Pagination, Text } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Simple = () => (
  <MnetUIBase theme={mnet}>
    <Box align="start" pad="small" gap="medium">
      <Box>
        <Text>Default</Text>
        <Pagination numberItems={237} />
      </Box>
      <Box>
        <Text>Box Props</Text>
        <Pagination
          numberItems={1237}
          page={24}
          background="brand"
          pad="medium"
          margin="small"
        />
      </Box>
    </Box>
  </MnetUIBase>
);

export default {
  title: 'Controls/Pagination/Simple',
};
