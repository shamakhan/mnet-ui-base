import React from 'react';

import { MnetUIBase, Box, InfiniteScroll, Text } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

const allItems = Array(2000)
  .fill()
  .map((_, i) => `item ${i + 1}`);

export const Simple = props => (
  <MnetUIBase theme={mnet}>
    <Box>
      <InfiniteScroll items={allItems} {...props}>
        {item => (
          <Box
            key={item}
            pad="medium"
            border={{ side: 'bottom' }}
            align="center"
          >
            <Text>{item}</Text>
          </Box>
        )}
      </InfiniteScroll>
    </Box>
  </MnetUIBase>
);

export default {
  title: 'Utilities/InfiniteScroll/Simple',
};
