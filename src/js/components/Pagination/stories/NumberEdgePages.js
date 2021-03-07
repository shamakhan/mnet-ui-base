import React from 'react';

import { Box, MnetUIBase, Pagination, Text } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const NumberEdgePages = () => (
  <MnetUIBase theme={mnet}>
    <Box pad="small" gap="medium">
      <Box>
        <Text>numberEdgePages = 2 (number of pages on start/end)</Text>
        <Pagination numberItems={237} page={10} numberEdgePages={2} />
      </Box>
      <Box>
        <Text>numberEdgePages = 0</Text>
        <Pagination numberItems={237} page={10} numberEdgePages={0} />
      </Box>
    </Box>
  </MnetUIBase>
);

NumberEdgePages.storyName = 'Number edge pages';

export default {
  title: 'Controls/Pagination/Number edge pages',
};
