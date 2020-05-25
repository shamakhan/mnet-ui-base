import React from 'react';

import { Box, InfiniteScroll, Text } from 'mnet-ui-base';

const allItems = Array(2000)
  .fill()
  .map((_, i) => `item ${i + 1}`);

export const Simple = props => (
  <>
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
  </>
);

export default {
  title: 'Utilities/InfiniteScroll/Simple',
};
