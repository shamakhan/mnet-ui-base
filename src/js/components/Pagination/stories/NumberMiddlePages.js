import React from 'react';

import { Box, MnetUIBase, Pagination, Text } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const NumberMiddlePages = () => (
  <MnetUIBase theme={mnet}>
    <Box pad="small" gap="medium">
      <Box>
        <Text>numberMiddlePages = 4 (number of pages in the middle)</Text>
        <Pagination numberItems={237} page={10} numberMiddlePages={4} />
      </Box>
      <Box>
        <Text>numberMiddlePages = 5 (number of pages in the middle)</Text>
        <Pagination numberItems={237} page={10} numberMiddlePages={5} />
      </Box>
    </Box>
  </MnetUIBase>
);

NumberMiddlePages.storyName = 'Number middle pages';

export default {
  title: 'Controls/Pagination/Number middle pages',
};
