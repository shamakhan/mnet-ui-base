import React from 'react';

import { Box, InfiniteScroll, Text } from 'mnet-ui-base';

const allItems = Array(2000)
  .fill()
  .map((_, i) => `item ${i + 1}`);

/* eslint-disable react/prefer-stateless-function */
const MyItem = ({ item }) => (
  <Box pad="medium" border={{ side: 'bottom' }} align="center">
    <Text>{item}</Text>
  </Box>
);

export const ClassChildrenInfiniteScroll = props => (
  <>
    <Box>
      <InfiniteScroll items={allItems} {...props}>
        {item => <MyItem key={item} item={item} />}
      </InfiniteScroll>
    </Box>
  </>
);

ClassChildrenInfiniteScroll.storyName = 'Class children';

export default {
  title: 'Utilities/InfiniteScroll/Class children',
};
