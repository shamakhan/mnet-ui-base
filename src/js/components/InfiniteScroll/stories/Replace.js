import React from 'react';
import { mnet } from 'mnet-ui-base/themes';

import { MnetUIBase, Box, InfiniteScroll, Text } from 'mnet-ui-base';

const allItems = Array(240)
  .fill()
  .map((_, i) => `item ${i + 1}`);

export const Replace = () => (
  <MnetUIBase theme={mnet}>
    <InfiniteScroll items={allItems} replace>
      {item => (
        <Box key={item} pad="medium" border={{ side: 'bottom' }} align="center">
          <Text>{item}</Text>
        </Box>
      )}
    </InfiniteScroll>
  </MnetUIBase>
);

Replace.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Utilities/InfiniteScroll/Replace',
};
