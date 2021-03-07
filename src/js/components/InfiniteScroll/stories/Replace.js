import React from 'react';

import { Box, InfiniteScroll, Text } from 'mnet-ui-base';

const allItems = Array(240)
  .fill()
  .map((_, i) => `item ${i + 1}`);

export const Replace = () => (
  <>
    <InfiniteScroll items={allItems} replace>
      {item => (
        <Box key={item} pad="medium" border={{ side: 'bottom' }} align="center">
          <Text>{item}</Text>
        </Box>
      )}
    </InfiniteScroll>
  </>
);

Replace.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Utilities/InfiniteScroll/Replace',
};
